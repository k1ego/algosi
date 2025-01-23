// 100. Same Tree
// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Input: p = [1,2], q = [1,null,2]; 
// Output: false

var isSameTree = function(p, q) {
	if (!p && !q) {
			return true;
	}
	if (p && q && p.val === q.val) {
			return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
	}

	return false;
};