// 107. Binary Tree Level Order Traversal II
// Given the root of a binary tree, return the bottom-up level order traversal 	of its nodes' values. (i.e., from left to right, level by level from leaf to root).

// Input: root = [3,9,20,null,null,15,7]
// Output: [[15,7],[9,20],[3]]

var levelOrderBottom = function (root) {
	const result = [];
	const queue = [root];

	if (!root) {
		return result;
	}

	while (queue.length) {
		const currentSize = queue.length;
		const currentLevel = [];

		for (let i = 0; i < currentSize; i++) {
			const node = queue.shift();
			currentLevel.push(node.val);

			if (node.left) {
				queue.push(node.left);
			}

			if (node.right) {
				queue.push(node.right);
			}
		}
		result.unshift(currentLevel);
	}
	return result;
};
