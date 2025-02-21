/**
 * Необходимо написать функцию поиска составного авиабилета.
 * Функция принимает на вход пункт вылета, пункт назначения и функцию поиска билетов и должна вернуть промис,
 * который резолвится массивом всех пунктов перелета или реджектится ошибкой 'No way'.
 * Функция поиска билетов возвращает список городов, до которых можно долететь из заданного.
 */

const example = { A: ['B', 'D'], B: ['C', 'N', 'Z'], D: ['E', 'F'], F: ['S'] };

async function fetchFlights(from) {
	return example[from];
}

console.log(findPath('A', 'N', fetchFlights)); // Promise.resolve(['A', 'B', 'N'])
console.log(findPath('A', 'S', fetchFlights)); // Promise.resolve(['A', 'D', 'F', 'S'])
console.log(findPath('B', 'S', fetchFlights)); // Promise.reject(new Error('No way'))

async function findPath(from, to, fetchFlights) {
	const queue = [from];
	const myMap = new Map();
	const visited = new Set();

	while (queue.length) {
		const source = queue.pop();
		if (visited.has(source)) continue;
		visited.add(source);

		const targets = await fetchFlights(source);
		if (!targets) continue;

		for (const target of targets) {
			if (!visited.has(target)) {
				queue.push(target);
				myMap.set(target, source);

				if (target === to) {
					const result = [target];
					while (result[result.length - 1] !== from) {
						result.push(myMap.get(result[result.length - 1]));
					}
					return result.reverse();
				}
			}
		}
	}

	throw new Error('No way');
}

/*
findPath('A', 'N', fetchFlights)

queue [A]
map ()

queue [] => [B, D]
map {B: [A, B], D: [A, D]}

queue [D] => [D, C, N, Z]
map {B: [A, B], D: [A, D], C: [A, B, C], N: [A, B, N], Z: [A, B, Z]} O(n^2)

newMap {B: A, N: B} O(n)

*/
