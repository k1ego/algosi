class TreeNode {
	constructor(val) {
			this.val = val;
			this.left = null;
			this.right = null;
	}
}

// BFS
function levelOrderTraversal(root) {
	const result = [];
	const queue = [root];

	if (!root) {
			return result;
	}

	while (queue.length > 0) {

			const node = queue.shift();
			result.push(node.val);

			if (node.left) {
					queue.push(node.left);
			}

			if (node.right) {
					queue.push(node.right);
			}
	}

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

console.log(levelOrderTraversal(root)); // Вывод: [5, 3, 6, 2, 4, 7, 1]