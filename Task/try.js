class TreeNode {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

var zigzagLevelOrder = function (root) {
	const result = [];
	const queue = [root];
	
	let buff = 1;

	if (!root) {
		return result;
	}

	while (queue.length) {
		const currentSize = queue.length;
		const currentLevel = [];

		for (let i = 0; i < currentSize; i++) {
			const isFuckingLost = buff % 2;
			const node = queue.shift();

			if (isFuckingLost === 1) {
				currentLevel.push(node.val);
			} else currentLevel.unshift(node.val);

			if (node.left) {
				queue.push(node.left);
			}

			if (node.right) {
				queue.push(node.right);
			}
		}
		buff++
		result.push(currentLevel);
	}
	return result;
};

// Пример использования:
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(levelOrderBottom(root));
