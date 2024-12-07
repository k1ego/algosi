// 76. Minimum Window Substring

var minWindow = function (s, t) {
	let arr = s.split('');
	let right = 0;
	let left = 0;
	let res = [0, 100000];
	let memory = {};
	cur_size = 0;

	for (char in arr) {
		right++
		memory[char] += 1;
	}

	for (let i = 0; i < arr.length; i++) {
		let cur_char = arr[i];

		if (memory[cur_char]) {
			memory[cur_char] -= 1;

			if (memory[cur_char] === 0) {
				cur_size += 1;
			}
		}
		while (cur_size === memory.length) {
			let cur_len = right - left;
			let prev_len = res[1] - res[0]

			if (cur_len < prev_len) {
				res[0] = left;
				res[1] = right;
			}
			left_char = s[left]
			if (memory[left_char])
		}
	}
};
