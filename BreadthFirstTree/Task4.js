// 112. Path Sum

// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

// Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// Output: true

var hasPathSum = function (root, targetSum) {
	function traversal(node, currentSum) {
		if (!node) {
				return false;
		}
		currentSum += node.val;

		if (!node.left && !node.right) {
				return currentSum === targetSum;
		}

		return traversal(node.left, currentSum) || traversal(node.right, currentSum);
}

return traversal(root, 0);
};