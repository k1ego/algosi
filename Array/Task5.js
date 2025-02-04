// Longest Consecutive Sequence / medium

// Given an array of integers nums, return the length of the longest consecutive sequence of elements that can be formed.

// A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element. The elements do not have to be consecutive in the original array.

// You must write an algorithm that runs in O(n) time.

// Example 1:
// Input: nums = [2,20,4,10,3,4,5]
// Output: 4
// Explanation: The longest consecutive sequence is [2, 3, 4, 5].

function longestConsecutive(nums) {
	const mySet = new Set(nums)
	let sortedAloneNums = [...mySet].sort((a, b) => a - b)
	let buff = 1;
	let result = 0;

	for (let i = 0; i < sortedAloneNums.length; i++) {

			if (sortedAloneNums[i] + 1 === sortedAloneNums[i + 1]) {
					while (sortedAloneNums[i] + 1 === sortedAloneNums[i + 1]) {
							buff++
							i++
					}
			}
			result = Math.max(buff, result)
			buff = 1
	}
	return result;
}

// O n(log(n))
console.log(longestConsecutive([2,20,4,10,3,4,5]))

// Hash Set / Second Solution

function longestConsecutive(nums) {
	const numSet = new Set(nums);
	let longest = 0;

	// берется рандомное число из множества
	for (let num of numSet) {
		// если числа меньше на 1 чем выбранное число нет, то ищем больше на 1, тк это начало последовательности
			if (!numSet.has(num - 1)) {
					let length = 1;
					while (numSet.has(num + length)) {
							length++;
					}
					longest = Math.max(longest, length);
			}
	}
	return longest;
}