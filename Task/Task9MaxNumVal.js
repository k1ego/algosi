/**
 * Необходимо написать функцию, возвращающую максимальное числовое значение
 * для строк из массива `strs`.
 * При этом, числовое значение для строки определяется следующим образом:
 * — Если строка состоит только из цифр, то числовое значение — это
 * результат преобразования строки в число
 * — В ином случае числовое значение — это длина строки
 */

// разница между Number() и parseInt() ?

// parseInt(number, radix); parseInt(str, 10)
// radix - система исчисления

// parseInt('3xxx) -> 3
// Number('3xxx') -> NaN

// первый способ
var maximumValue = function (strs) {
	if (!strs.length) {
		return 0;
	}

	let count = 0;
	let res = 0;

	for (let symbols of strs) {
		const value = Number(symbols);

		if (isNaN(value)) {
			count = symbols.length;
		} else {
			count = value;
		}
		res = Math.max(res, count);
	}
	return res;
};

// второй способ (лаконичнее)

var maximumValue = function (strs) {
	return strs.reduce((acc, str) => {
		const value = Number(str);

		return Number.isNaN(value) // Number.isNaN(value) - проверяет является ли переданное значение строго NaN без приведения типов
			? Math.max(acc, str.length)
			: Math.max(acc, value);
	}, 0);
};

console.log(maximumValue(['alic3', 'bob', '3', '4', '00000'])); // 5
console.log(maximumValue(['1', '01', '001', '0001'])); // 1

// 1. '0001' -> 1
// 2. 'alic3' -> 5
