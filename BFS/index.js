function breadthSearch(graph, start, end) {
	const queue = [{ node: start, path: [start] }];
	const visited = {};

	while (queue.length > 0) {
			const { node, path } = queue.shift();

			if (visited[node]) {
					continue;
			}

			

			// A [ 'A' ]
			// B [ 'A', 'B' ]
			// C [ 'A', 'C' ]
			// D [ 'A', 'B', 'D' ]
			// E [ 'A', 'C', 'E' ]
			// F [ 'A', 'C', 'E', 'F' ]

			visited[node] = true;

			if (node === end) {
					return path;
			}

			for (const neighbor of graph[node]) {
					if (!visited[neighbor]) {
							queue.push({ node: neighbor, path: [...path, neighbor] });
					}
			}
	}

	return null;
}

const graph = {
	A: ['B', 'C'],
	B: ['A', 'D'],
	C: ['A', 'D', 'E'],
	D: ['B', 'C', 'E'],
	E: ['C', 'D', 'F'],
	F: ['E']
};

const result = breadthSearch(graph, 'A', 'F');
console.log(result); // [ 'A', 'C', 'E', 'F' ]