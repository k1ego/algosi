// Products of Array Except Self / medium

// Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].

// Each product is guaranteed to fit in a 32-bit integer.

// Follow-up: Could you solve it in O(n) time without using the division operation?

// Example 1:
// Input: nums = [1,2,4,6]
// Output: [48,24,12,8]

// Example 2:
// Input: nums = [-1,0,1,2,3]
// Output: [0,-6,0,0,0]

class Solution {
	/**
	 * @param {number[]} nums
	 * @return {number[]}
	 */
	productExceptSelf(nums) {
			let prod = 1;
			let zeroCount = 0;
			for (let num of nums) {
					if (num !== 0) {
							prod *= num;
					} else {
							zeroCount++;
					}
			}

			if (zeroCount > 1) {
					return Array(nums.length).fill(0); 
			}

			const res = new Array(nums.length);
			for (let i = 0; i < nums.length; i++) {
					if (zeroCount > 0) {
							res[i] = (nums[i] === 0) ? prod : 0;
					} else {
							res[i] = prod / nums[i];
					}
			}
			return res;
	}
}