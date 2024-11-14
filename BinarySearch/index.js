function binarySearch(arr, target) {
	let firstItem = 0;
	let lastItem = arr.length - 1;

	while (firstItem <= lastItem) {
		const mid = Math.floor((firstItem + lastItem) / 2);
		const guess = arr[mid];
		if (guess === target) {
			return mid;
		}
		if (guess > target) {
			lastItem = mid - 1;
		}
		else {
			firstItem = mid + 1;
		}
	}
	return null;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 6;
console.log(binarySearch(arr, target)) // 5