// 102. Binary Tree Level Order Traversal 'Medium'
// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

var levelOrder = function(root) {
	const result = [];
const queue = [root];

if (!root) {
	return result;
}

while (queue.length > 0) {
	const currentLevel = [];
	const currentLength = queue.length;

	for (let i = 0; i < currentLength; i++) {
		let node = queue.shift();
		currentLevel.push(node.val);

		if (node.left) {
			queue.push(node.left);
		}

		if (node.right) {
			queue.push(node.right);
		}
	}
	result.push(currentLevel);
}

return result;
};
