// Daily Temperatures / medium

// You are given an array of integers temperatures where temperatures[i] represents the daily temperatures on the ith day.

// Return an array result where result[i] is the number of days after the ith day before a warmer temperature appears on a future day. If there is no day in the future where a warmer temperature will appear for the ith day, set result[i] to 0 instead.

// Example:

// Input: temperatures = [30,38,30,36,35,40,28]
// Output: [1,4,1,2,1,0,0]


// stack

function dailyTemperatures(temperatures) {
	let result = new Array(temperatures.length).fill(0);
	let stack = [];

	for (let i = 0; i < temperatures.length; i++) {
		// текущее значение
		const curValue = temperatures[i];

		// значение последнего элемента в стеке
		// stack[stack.length - 1][0]

		while (stack.length > 0 && curValue > stack[stack.length - 1][0]) {
			// достаем значение и индекс верхнего элемента в стеке
			const [stackValue, stackIndex] = stack.pop();

			result[stackIndex] = i - stackIndex;
		}

		stack.push([curValue, i]);
	}
	return result;
}


// BruteForce

class Solution {
	/**
	 * @param {number[]} temperatures
	 * @return {number[]}
	 */
	dailyTemperatures(temperatures) {
			const n = temperatures.length;
			const res = new Array(n).fill(0);

			for (let i = 0; i < n; i++) {
					let count = 1;
					let j = i + 1;
					while (j < n) {
							if (temperatures[j] > temperatures[i]) {
									break;
							}
							j++;
							count++;
					}
					count = (j === n) ? 0 : count;
					res[i] = count;
			}
			return res;
	}
}
