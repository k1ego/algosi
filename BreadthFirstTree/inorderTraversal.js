class TreeNode {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

function inorderTraversal(root) {
	const result = [];

	function traversal(node) {
		if (node === null) {
			return;
		}

		// Рекурсивно обходим левое поддерево
		traversal(node.left);

		// Посещаем текущий узел
		result.push(node.value);

		// Рекурсивно обходим правое поддерево
		traversal(node.right);
	}

	traversal(root);
	return result;
}

// Пример использования:
const root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(6);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.right.right = new TreeNode(7);
root.left.left.left = new TreeNode(1);

console.log(inorderTraversal(root)); // Вывод: [1, 2, 3, 4, 5, 6, 7]
