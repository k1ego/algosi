// 1876. Substrings of Size Three with Distinct Characters

var countGoodSubstrings = function (s) {
	let arr = s.split('');
	let res = 0;
	let memory = {};
	let left = 0;
	let right = 0;

	for (let i = 0; i < arr.length; i++) {
		let cur_char = arr[i];
		memory[cur_char] = (memory[cur_char] || 0) + 1;
		right++;

		if (Object.keys(memory).length === 3) {
			res += 1;
		}

		if (right - left === 3) {
			let left_char = s[left];
			memory[left_char] -= 1;

			if (memory[left_char] === 0) {
				delete memory[left_char];
			}

			left += 1;
		}

	}
	return res;
};

console.log(countGoodSubstrings('xyzzaz')); // 1
console.log(countGoodSubstrings('aababcabc')); // 4
