// Дан массив чисел nums и k. Нужно вернуть одно число - максимальную сумму k подряд идущих элементов.

const maxSumOfSubstring = function(nums, k) {
	let result = 0;

	if (k > nums.length) {
		return 0;
	}

	let curSum = 0;
	for (let i = 0; i < k; i++) {
		curSum += nums[i];
	}

	result = curSum;
	for (let i = k; i < nums.length; i++) {
		curSum = curSum - nums[i - k] + nums[i];

		result = Math.max(result, curSum);
	}

	return result;
};

console.log(maxSumOfSubstring([5, 6, 7, 9, 2], 3)); // 22

