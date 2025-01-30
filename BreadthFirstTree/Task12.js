// 110. Balanced Binary Tree
// Given a binary tree, determine if it is height-balanced.
// Отличие от 11 задачи в том, что нужно определить является ли дерево сбалансированным, а не строить его из массива

// Input: root = [3,9,20,null,null,15,7]
// Output: true

// First Solution

var isBalanced = function(root) {
    
	let dfs = function(node) {
			if (!node) return 0;
			let left = 1 + dfs(node.left);
			let right = 1 + dfs(node.right);
			if (Math.abs(left - right) > 1) return Infinity;
			return Math.max(left, right);
	}
	
	return dfs(root)==Infinity?false:true;
};


// Second Solution

const isBalanced = root => {
	let isBalanced = true;

	const isNodeBalanced = node => {
		if (!node) return 0;

		const leftPortionBalance = isNodeBalanced(node.left);
		const rightPortionBalance = isNodeBalanced(node.right);

		if (!isBalanced || Math.abs(leftPortionBalance - rightPortionBalance) > 1)
			return (isBalanced = false);

		return Math.max(leftPortionBalance, rightPortionBalance) + 1;
	};

	isNodeBalanced(root);

	return isBalanced;
};
