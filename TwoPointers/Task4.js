// Дан целочисленный массив nums, переместите все нули в его конец, сохраняя относительный порядок ненулевых элементов.
// Обратите внимание, что вы должны сделать это in-place, не создавая копию массива.

// Input: nums = [2, 0, 0, 9, 3, 0, 1]
// Output: [2, 9, 3, 1, 0, 0, 0]

function moveZeroToEnd(nums) {
	let slowPointer = 0;
	let fastPointer = 0;

	while (fastPointer < nums.length) {
		if (nums[fastPointer] !== 0) {
			// меняем местами
			[nums[slowPointer], nums[fastPointer]] = [
				nums[fastPointer],
				nums[slowPointer],
			];
			slowPointer++;
		}
		fastPointer++;
	}
	return nums;
}

console.log(moveZeroToEnd([2, 0, 0, 9, 3, 0, 1]));
