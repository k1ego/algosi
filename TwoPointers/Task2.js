/*
Задача №2: Сумма элементов, которая равна target

✓ Задача: напишите функцию, которая аргументом принимает отсортированный по возрастанию массив целых чисел и значение target. Функция должна проверить, есть ли в массиве сумма элементов, которая равна значению аргумента target. Если элементы в массиве дают в сумме значение target, то функция возвращает true. В противном случае false.

Тестовые наборы данных:
- Входные данные: [2, 2, 4], 4 Результат: true
- Входные данные: [1, 2, 3, 5], 6 Результат: true.
- Входные данные: [1, 1], 16 Результат: false

*/

// Сложность O(n)

function isExistsElementsSum(array, target) {
	let leftPointer = 0;
	let rightPointer = array.length - 1;
	let result = false;

	while (rightPointer >= leftPointer) {
		const sum = array[rightPointer] + array[leftPointer];

		if (sum === target) {
			return true;
		} else if (sum < target) {
			leftPointer += 1;
		} else {
			rightPointer -= 1;
		}
	}
	return result;
}

console.log(isExistsElementsSum([2, 2, 4], 4))
