// Дан целочисленный мыссив nums, элементы которого отсортированы в порядке возврастания. Нужно преобразовать массив nums в сбалансированное по высоте двоичное дерево поиска.
// Input: [-2, 4, 6, 12, 18, 21]

var toBST = function(nums, l, r) {
	if (l > r) {
			return null;
	}

	// вычисляем средний элемент между l и r
	var mid = Math.floor((l + r) / 2);

	return new TreeNode(
			nums[mid],
			// рекурсивно строим левое поддерево,
			// которое будет сбалансированно по высоте
			toBST(nums, l, mid - 1),
			// рекурсивно строим правое поддерево,
			// которое будет сбалансированно по высоте
			toBST(nums, mid + 1, r)
	);
};


var sortedArrayToBST = function(nums) {
	return toBST(nums, 0, nums.length - 1);
};