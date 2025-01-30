// Дан корень бинарного дерева поиска root и числа minVal и maxVal. Нужно проверить, что для каждой вершины node в дереве верно monVal <= node.val <= maxVal

let validate_tree_leaves = function (root, minVal, maxVal) {
	function getLeftMostValue(node) {
		while (node.left) {
			node = node.left;
			return node.val;
		}
	}
	function getRightMostValue(node) {
		while (node.right) {
			node = node.right;
			return node.val;
		}
	}
	let leftMost = getLeftMostValue(root);
	let rightMost = getRightMostValue(root);

	return (
		minVal <= leftMost &&
		leftMost <= maxVal &&
		minVal <= rightMost &&
		rightMost <= maxVal
	);
};
