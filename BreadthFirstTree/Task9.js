// 98. Validate Binary Search Tree
// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// Input: root = [2,1,3]
// Output: true

// First Solution

var isValidBST = function (root) {
	const prev = -Infinity;
	const isValid = true;

	function traversal(node) {
		if (!isValid || !node) {
			return;
		}
		traversal(node.left);

		if (prev >= node.val) {
			isValid = false;
			return;
		}
		prev = node.val;

		traversal(node.right);
	}
	traversal(root);
	return isValid;
};

// Second Solution

var isValidBST = function (root) {
	function isValid(node, low, high) {
		if (!node) {
			return true;
		}
		if (!(low < node.val && node.val < high)) {
			return false;
		}
		return (
			isValid(node.left, low, node.val) && isValid(node.right, node.val, high)
		);
	}
	return isValid(root, -Infinity, +Infinity);
};
