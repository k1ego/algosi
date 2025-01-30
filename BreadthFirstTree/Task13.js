// Дан корень правильного бинарного дерева поиска и число k. Нужно вернуть k-ый наименьший элемент в дереве (отсчет для k начинается с 1)

// Пример: Ввод: [10, 5, 11, -2, 7, 15] Вывод: 7

var kthSmalles = function(root, k) {
	function inorder(node, k) {
		if (!node) {
			return null;
		}
		let result = inorder(node.left)
		if (result) {
			return result;
		}
		k -= 1;
		if (k === 0) {
			return node.val
		}
		inorder(node.right)
	}
	return inorder(root, k)
}

// если то же условие, но нужно вернуть наибольшее элемент в дереве

var kthSmalles = function(root, k) {
	function postorder(node, k) {
		if (!node) {
			return null;
		}
		let result = postorder(node.right)
		if (result) {
			return result;
		}
		k -= 1;
		if (k === 0) {
			return node.val
		}
		postorder(node.left)
	}
	return postorder(root, k)
}


