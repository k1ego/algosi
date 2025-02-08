// Minimum Stack / medium

// Design a stack class that supports the push, pop, top, and getMin operations.

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// Each function should run in O(1) time.

// Example:

// Input: ["MinStack", "push", 1, "push", 2, "push", 0, "getMin", "pop", "top", "getMin"]

// Output: [null,null,null,null,0,null,2,1]

// Explanation:
// MinStack minStack = new MinStack();
// minStack.push(1);
// minStack.push(2);
// minStack.push(0);
// minStack.getMin(); // return 0
// minStack.pop();
// minStack.top();    // return 2
// minStack.getMin(); // return 1

// 1 Solution. Brute Force

class MinStack {
	constructor() {
		this.stack = [];
	}

	/**
	 * @param {number} val
	 * @return {void}
	 */
	push(val) {
		this.stack.push(val);
	}

	/**
	 * @return {void}
	 */
	pop() {
		this.stack.pop();
	}

	/**
	 * @return {number}
	 */
	top() {
		return this.stack[this.stack.length - 1];
	}

	/**
	 * @return {number}
	 */
	getMin() {
		let temp = [];
		let mini = this.stack[this.stack.length - 1];

		while (this.stack.length) {
			let lastElStack = this.stack.pop();
			mini = Math.min(mini, lastElStack);

			temp.push(lastElStack);
		}

		while (temp.length) {
			let lastElArray = temp.pop();
			this.stack.push(lastElArray);
		}

		return mini;
	}
}

// Time complexity:
// O(n) for  getMin() and O(1) for other operations.
// Space complexity: O(n) for getMin() and O(1) for other operations.

// 2 Solution. Two Stack

class MinStack {
	constructor() {
		this.stack = [];
		this.MinStack = [];
	}

	/**
	 * @param {number} val
	 * @return {void}
	 */
	push(val) {
		this.stack.push(val);
		val = Math.min(
			val,
			this.MinStack.length === 0 ? val : this.MinStack[this.MinStack.length - 1]
		);
		this.MinStack.push(val);
	}

	/**
	 * @return {void}
	 */
	pop() {
		this.stack.pop();
	}

	/**
	 * @return {number}
	 */
	top() {
		return this.stack[this.stack.length - 1];
	}

	/**
	 * @return {number}
	 */
	getMin() {
		return this.MinStack[this.MinStack.length - 1];
	}
}

// Time complexity: O(1) for all operations.
// Space complexity: O(n)
