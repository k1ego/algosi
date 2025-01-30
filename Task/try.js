class TreeNode {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

const isBalanced = root => {
	let isBalanced = true;

	const isNodeBalanced = node => {
		if (!node) return 0;

		const leftPortionBalance = isNodeBalanced(node.left);
		const rightPortionBalance = isNodeBalanced(node.right);

		if (!isBalanced || Math.abs(leftPortionBalance - rightPortionBalance) > 1)
			return (isBalanced = false);

		return Math.max(leftPortionBalance, rightPortionBalance) + 1;
	};

	isNodeBalanced(root);

	return isBalanced;
};

// Пример использования:
const root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(2)
console.log(isBalanced(root));
