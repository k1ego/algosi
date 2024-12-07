// 159. Longest Substring with At Most Two Distinct Characters

var lengthOfLongestSubstringTwoDistinct = function (s) {
	let arr = s.split('');
	let right = 0;
	let left = 0;
	let res = 0;
	let memory = {};

	for (let i = 0; i < arr.length; i++) {
		let cur_char = arr[i];
		memory[cur_char] = (memory[cur_char] || 0) + 1;

		while (Object.keys(memory).length > 2) {
			let left_char = arr[left];
			memory[left_char] -= 1;

			if (memory[left_char] === 0) {
				delete memory[left_char];
			}

			left++;
		}
		res = Math.max(right - left + 1, res);
		right++;
	}
	return res;
};

console.log(lengthOfLongestSubstringTwoDistinct('eceba')); // 3
console.log(lengthOfLongestSubstringTwoDistinct('ccaabbb')); // 5
