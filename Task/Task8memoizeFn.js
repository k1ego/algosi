/**
 * Реализуйте функцию, возвращающую мемоизированную версию функции `fn`.
 * Мемоизированная функция никогда не будет вызвана дважды для одной и
 * той же комбинации входных аргументов — она вернет значение из кеша.
 */

function memoize(fn) {
	const cache = new Map(); // <hashedArgs, value>

	return function (...args) {
		const hashedArgs = args.join('_');

		if (cache.has(hashedArgs)) {
			return cache.get(hashedArgs);
		}

		const value = fn(...args);

		cache.set(hashedArgs, value);

		return value;
	};
}

let callCount1 = 0;
const memoizedFn1 = memoize(function (a, b) {
	callCount1 += 1;
	return a + b;
});

console.log(memoizedFn1(2, 3)); // 5
console.log(memoizedFn1(2, 3)); // 5
console.log(callCount1); // 1

let callCount2 = 0;
const memoizedFn2 = memoize(function (a, b) {
	callCount2 += 1;
	return a + b;
});

console.log(memoizedFn2(2, 3)); // 5
console.log(memoizedFn2(3, 2)); // 5
console.log(callCount2); // 2

let callCount3 = 0;
const memoizedFn3 = memoize(function (a, b, c) {
	callCount3 += 1;
	return a + b;
});

console.log(memoizedFn3(2, 3, 1)); // 6
console.log(memoizedFn3(3, 2, 2)); // 5
console.log(callCount3); // 2
