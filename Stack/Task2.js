// Evaluate Reverse Polish Notation / medium

// You are given an array of strings tokens that represents a valid arithmetic expression in Reverse Polish Notation.

// Return the integer that represents the evaluation of the expression.

// The operands may be integers or the results of other operations.
// The operators include '+', '-', '*', and '/'.
// Assume that division between integers always truncates toward zero.

// Example:

// Input: tokens = ["1","2","+","3","*","4","-"]
// Output: 5
// Explanation: ((1 + 2) * 3) - 4 = 5

function evalRPN(tokens) {
	const stack = [];
	for (const c of tokens) {
		if (c === '+') {
			stack.push(stack.pop() + stack.pop());
		} else if (c === '-') {
			const a = stack.pop();
			const b = stack.pop();
			stack.push(b - a);
		} else if (c === '*') {
			stack.push(stack.pop() * stack.pop());
		} else if (c === '/') {
			const a = stack.pop();
			const b = stack.pop();
			stack.push(Math.trunc(b / a));
		} else {
			stack.push(parseInt(c));
		}
	}
	return stack.pop();
}
console.log(evalRPN(['4', '13', '5', '/', '+']));
