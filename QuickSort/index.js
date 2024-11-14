function quickSort(array) {
	if (array.length < 2) {
		return array;
	}

	const pivot = array[array.length - 1];
	const less = [];
	const greater = [];
	for (let i = 0; i < array.length - 1; i++) {
		if (array[i] < pivot) {
			less.push(array[i]);
		} else {
			greater.push(array[i]);
		}
	}

	return [...quickSort(less), pivot, ...quickSort(greater)];
}

const values = [2, 27, 14, 52, 31, 96, 73, 47, 22, 6];
console.log(quickSort(values));