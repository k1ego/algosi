function selectionSort(arr) {
	let n = arr.length;

	for (let i = 0; i < n - 1; i++) {
			// Предполагаем, что минимальный элемент — это текущий
			let minIndex = i;

			// Находим индекс минимального элемента в оставшейся части массива
			for (let j = i + 1; j < n; j++) {
					if (arr[j] < arr[minIndex]) {
							minIndex = j;
					}
			}

			// Меняем местами минимальный элемент с текущим
			if (minIndex !== i) {
					let temp = arr[i];
					arr[i] = arr[minIndex];
					arr[minIndex] = temp;
			}
	}
	return arr;
}

// Пример использования
const array = [64, 25, 12, 22, 11];
console.log(selectionSort(array)); // Вывод: [11, 12, 22, 25, 64]
