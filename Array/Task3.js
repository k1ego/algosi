// 39. Combination Sum / medium

// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

// The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

// Example:

// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]

var combinationSum = function(candidates, target) {
	let res = []

	function diff(index, combinate, curTotal) {
			if (curTotal === target) {
					res.push([...combinate])
					return;
			}

			if (curTotal > target || index >= candidates.length) {
					return;
			}

			combinate.push(candidates[index])
			diff(index, combinate, curTotal + candidates[index])
			combinate.pop()
			diff(index + 1, combinate, curTotal)
	}
	diff(0, [], 0)
	return res
};

console.log(combinationSum([2,3,6,7], 7))