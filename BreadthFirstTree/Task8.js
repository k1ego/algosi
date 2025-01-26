// 103. Binary Tree Zigzag Level Order Traversal
// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[20,9],[15,7]]

var zigzagLevelOrder = function (root) {
	const result = [];
	const queue = [root];
	let buff = 1;

	if (!root) {
		return result;
	}

	while (queue.length) {
		const currentSize = queue.length;
		const currentLevel = [];

		for (let i = 0; i < currentSize; i++) {
			const isFuckingLost = buff % 2;
			const node = queue.shift();

			if (isFuckingLost === 1) {
				currentLevel.push(node.val);
			} else currentLevel.unshift(node.val);

			if (node.left) {
				queue.push(node.left);
			}

			if (node.right) {
				queue.push(node.right);
			}
		}
		buff++;
		result.push(currentLevel);
	}
	return result;
};
