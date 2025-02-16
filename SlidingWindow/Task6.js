// Дан массив чисел nums и k. Нужно вернуть одно число - максимальное произведение k подряд идущих элементов.

const maxMultOfSubstring = function(nums, k) {
	let result = 0;

	if (k > nums.length) {
			return 0;
	}

	let curMult = 1;

	// Вычисляем произведение первых k элементов
	for (let i = 0; i < k; i++) {
			curMult *= nums[i];
	}

	result = curMult;

	for (let i = k; i < nums.length; i++) {
			if (nums[i - k] !== 0) {
					// Если элемент, который выходит из окна, не 0, корректируем произведение
					curMult = (curMult / nums[i - k]) * nums[i];
			} else {
					// Если элемент, который выходит из окна, был 0, пересчитываем окно заново
					curMult = 1;
					for (let j = i - k + 1; j <= i; j++) {
							curMult *= nums[j];
					}
			}

			result = Math.max(result, curMult);
	}

	return result;
};

// Пример использования:
console.log(maxMultOfSubstring([5, 6, 7, 9, 2], 3)); // Ожидаемый результат: 378 (6 * 7 * 9)
console.log(maxMultOfSubstring([0, 1, 2, 3, 4], 3)); // Ожидаемый результат: 12 (3 * 4)
console.log(maxMultOfSubstring([0, 0, 0], 2)); // Ожидаемый результат: 0
console.log(maxMultOfSubstring([4, 0, 5, 2, 4, 1, 0], 3)); // Ожидаемый результат: 0