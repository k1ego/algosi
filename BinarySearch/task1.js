/* Дан массив целых чисел nums, отсортированных по возрастанию, и целое число
target, необходимо написать функцию для поиска target в nums. Если target
существует, надо вернуть его индекс. В противном случае вернуть -1. Вы должны написать алгоритм со сложностью O(log n). */

function binarySearch(arr, target) {
	let firstItem = 0;
	let lastItem = arr.length - 1

	while (firstItem < lastItem) {
		const middle = Math.floor((firstItem + lastItem) / 2);
		const guess = arr[middle]
		if (guess === target) {
			return middle;
		}
		if (guess > target) {
			lastItem = middle - 1;
		}
		else {
			firstItem = middle + 1
		}
	}
	return -1;
}

const arr = [-1, 0, 3, 5, 9, 12];
const target = 9;
console.log(binarySearch(arr, target)) 