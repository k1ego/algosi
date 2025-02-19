// Общие элементы отсортированных массивов
// Найти пересечение двух отсортированных массивов ИЛИ другими словами
// для двух отсортированных массивов найти все элементы, которые есть в обоих массивах

// Input: nums1 = [2,2,5,8,14,19,29,30], nums2 = [-3,0,1,2,2,2,8,19]
// Output: [2,2,8,19]

function commonElements(nums1, nums2) {
	let firstPointer = 0;
	let secondPointer = 0;
	const result = [];

	while (firstPointer < nums1.length && secondPointer < nums2.length) {
		const valOfFirst = nums1[firstPointer];
		const valOfSecond = nums2[secondPointer];

		if (valOfFirst === valOfSecond) {
			result.push(valOfFirst);
			firstPointer++;
			secondPointer++;
		} else if (valOfFirst > valOfSecond) {
			secondPointer++;
		} else {
			firstPointer++;
		}
	}
	return result;
}

console.log(
	commonElements([2, 2, 5, 8, 14, 19, 29, 30], [-3, 0, 1, 2, 2, 2, 8, 19])
);
