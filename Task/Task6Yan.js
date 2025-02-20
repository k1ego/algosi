/**
 * Реализуйте функцию, которая реализует объект счётчика
 * с базовыми методами: `increment`, `decrement`, `reset`.
 * Аргумент `init` устанавливает начальное значение счётчика.
 */

var createCounter = function (init) {
	let innerValue = init;

	const methods = {
		reset: () => {
			innerValue = init;
			return innerValue;
		},
		increment: () => {
			++innerValue;
		},
		decrement: () => {
			--innerValue;
		},
	};
	return methods;
};

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
