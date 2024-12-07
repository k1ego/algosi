// 3. Longest Substring Without Repeating Characters

var lengthOfLongestSubstring = function (s) {
	let arr = s.split('');
	let right = 0;
	let left = 0;
	let res = 0;
	let memory = new Set();

	for (let i = 0; i < arr.length; i++) {
		let cur_char = arr[i];

		while (memory.has(cur_char)) {
			let left_char = arr[left];
			memory.delete(left_char);
			left += 1;
		}

		memory.add(cur_char);

		res = Math.max(right - left + 1, res);

		right += 1;
	}
	return res;
};

console.log(lengthOfLongestSubstring('abcabcbb')); // 3
