document.addEventListener('DOMContentLoaded', () => {
	const form = document.getElementById('search');
	const input = document.getElementById('search-input');
	const root = document.getElementById('list'); 
	const searchButton = document.getElementById('search-submit'); 

	let originalItems = []; 
	let lastSearchTerm = ''; 


	function saveOriginalItems() {
		originalItems = [...root.children].map(item => item.cloneNode(true));
	}

	
	function restoreOriginalItems() {
		root.innerHTML = ''; 
		originalItems.forEach(item => root.appendChild(item.cloneNode(true)));
		CSS.highlights.clear();
	}


	function highlight() {
		CSS.highlights.clear();
		const str = input.value.trim().toLowerCase();
		lastSearchTerm = str; 

		if (!str) return;

		const text = root.textContent.replace(/\s/g, ' ').toLowerCase();
		if (!text) return;

		const queryStartIndexes = [];

		for (let i = 0; i < text.length; i++) {
			const startIndex = text.indexOf(str, i);
			if (startIndex === -1) break;

			queryStartIndexes.push(startIndex);
			i = startIndex;
		}

		function getNodeAtOffset(node, offset) {
			const stack = [node];
			let currOffset = 0;

			while (stack.length) {
				const curr = stack.pop();

				if (curr.nodeType === Node.TEXT_NODE) {
					if (currOffset + curr.textContent.length >= offset) {
						return {
							node: curr,
							offsetInNode: offset - currOffset,
						};
					}
					currOffset += curr.textContent.length;
				} else {
					stack.push(...[...curr.childNodes].reverse());
				}
			}
			return null;
		}

		const ranges = queryStartIndexes.map(queryStartIndex => {
			const { node: nodeStart, offsetInNode: offsetInNodeStart } =
				getNodeAtOffset(root, queryStartIndex);
			const { node: nodeEnd, offsetInNode: offsetInNodeEnd } = getNodeAtOffset(
				root,
				queryStartIndex + str.length
			);

			const range = new Range();
			range.setStart(nodeStart, offsetInNodeStart);
			range.setEnd(nodeEnd, offsetInNodeEnd);

			return range;
		});

		const searchResultsHighlight = new Highlight(...ranges);
		CSS.highlights.set('search-results', searchResultsHighlight);
	}

	
	function filterList(event) {
		event.preventDefault(); 

		const str = input.value.trim().toLowerCase();
		lastSearchTerm = str;

		if (!str) {
			restoreOriginalItems(); 
			return;
		}

		const filteredItems = originalItems.filter(item =>
			item.textContent.toLowerCase().includes(str)
		);

		root.innerHTML = ''; 
		filteredItems.forEach(item => root.appendChild(item.cloneNode(true)));

		highlight();
	}


	saveOriginalItems();


	input.addEventListener('input', highlight);
	searchButton.addEventListener('click', filterList); 

    input.addEventListener("search", () => {
		if (!input.value) {
			location.reload(); 
		}
	});

	
	const style = document.createElement('style');
	style.textContent = `
		::highlight(search-results) {
			background-color: yellow;
			color: black;
		}
	`;
	document.head.appendChild(style);
});
