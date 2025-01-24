// 111. Minimum Depth of Binary Tree

// Given a binary tree, find its minimum depth.
// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Input: root = [3,9,20,null,null,15,7]
// Output: 2

var minDepth = function (root) {
	if (!root) {
		return 0;
	}

	const leftDepth = minDepth(root.left);
	const rightDepth = minDepth(root.right);
	if (!root.left) {
		return rightDepth + 1;
	}

	if (!root.right) {
		return leftDepth + 1;
	}

	return Math.min(leftDepth, rightDepth) + 1;
};
