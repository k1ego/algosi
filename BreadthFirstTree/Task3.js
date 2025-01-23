// 104. Maximum Depth of Binary Tree

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Input: root = [3,9,20,null,null,15,7]
// Output: 3

var maxDepth = function(root) {
	if (!root) {
			return 0;
	}
	else {
			const leftDepth = maxDepth(root.left)
			const rightDepth = maxDepth(root.right)
			return Math.max(leftDepth, rightDepth) + 1;
	}
};