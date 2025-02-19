/*
Задача №1: Возвести элементы массива в квадрат

✅ Задача: напишите функцию, которая аргументом принимает отсортированный по возрастанию массив целых чисел
и возвращает новый массив, где каждый элемент
входного массива возведён в квадрат. Результирующий массив также должен быть отсортирован по возрастанию.

✅ Тестовые наборы данных:
♥ – Входные данные: ([-3, 2, 4]). Результат: ([4, 9, 16]).
– Входные данные: ([-2, -1, 3, 5]). Результат: ([1, 4, 9, 25]).

*/

// сложность O(n). При использовании сортировки и метода map - сложность O(n log(n))

function getSquare(array) {
	let leftPointer = 0;
	let rightPointer = array.length - 1;
	const result = [];

	while (rightPointer >= leftPointer) {
		const leftVal = array[leftPointer] ** 2;
		const rightVal = array[rightPointer] ** 2;

		if (leftVal > rightVal) {
			result.unshift(leftVal);
			leftPointer += 1;
		} else {
			result.unshift(rightVal);
			rightPointer -= 1;
		}
	}
	return result;
}

const case1 = [-3, 2, 4];
const case2 = [-2, -1, 3, 5];
console.log(getSquare(case1));
console.log(getSquare(case2));
