// Напишите функцию, которая суммирует все цифры одного числа, пока не будет получена цифра. Входные данные – любое неотрицательное целое число.
// Примеры:
// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6

function digitInNums(num) {
	while (num > 9) {
		const array = String(num).split('') // ["1", "6"]
		let cur = 0;
		for (let i = 0; i < array.length; i++) {
			cur += +array[i]
		}
		num = cur;
	}
	return num
}

console.log(digitInNums(16))

// проще

function digitInNums2(num) {
	while (num > 9) {
		num = String(num).split('').reduce((acc, item) => {
			return acc += +item
		}, 0)
	}
	return num
}

console.log(digitInNums2(16))