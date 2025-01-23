// 101. Symmetric Tree
// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Input: root = [1,2,2,3,4,4,3]
// Output: true

var isSymmetric = function (root) {
	const isMirror = (n1, n2) => {
		if (!n1 && !n2) {
			return true;
		}
		if (n1 && n2 && n1.val === n2.val) {
			return isMirror(n1.left, n2.right) && isMirror(n1.right, n2.left);
		}
		return false;
	};
	return isMirror(root.left, root.right);
};
