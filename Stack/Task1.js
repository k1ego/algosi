// Valid Parentheses / easy

// You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.

// The input string s is valid if and only if:

// Every open bracket is closed by the same type of close bracket.
// Open brackets are closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
// Return true if s is a valid string, and false otherwise.

// Example:

// Input: s = "([{}])"

// Output: true

class Solution {
	/**
	 * @param {string} s
	 * @return {boolean}
	 */
	isValid(s) {
		let array = s.split('');
		let stack = [];
		for (let i = 0; i < array.length; i++) {
			if (array[i] === '(' || array[i] === '[' || array[i] === '{') {
				stack.push(array[i]);
			} else {
				if (
					!stack.length ||
					(array[i] === ')' && stack.pop() !== '(') ||
					(array[i] === ']' && stack.pop() !== '[') ||
					(array[i] === '}' && stack.pop() !== '{')
				) {
					return false;
				}
			}
		}
		return !stack.length;
	}
}
