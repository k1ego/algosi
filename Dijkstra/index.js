// Поиск кратчайшего пути во взвешенном графе
function dijkstra(graph, start, end) {
	// все точки с расстоянием от стартовой точки
	const distances = {};
	// посещенные вершины
	const visited = new Set();
	// история путей
	const path = {};

	for (const key in graph) {
		if (key !== start) {
			distances[key] = Infinity;
		} else {
			distances[start] = 0;
		}
	}
	// крутимся пока не посетили конечную вершину
	while (!visited.has(end)) {
		// кратчайшее расстояние
		let lowestDistance = Infinity;
		// название вершины с кратчайшим расстоянием
		let node = null;

		for (const key in distances) {
			if (lowestDistance > distances[key] && !visited.has(key)) {
				lowestDistance = distances[key]
				node = key
			}
		}
		// по названию вершины из графа получаем ее соседние вершины
		const neighbors = graph[node]
		for (const key in neighbors) {
			// расстояние до текущей вершины + расстояние до соседней вершины
			const newDistance = distances[node] + neighbors[key]
			if (newDistance < distances[key]) {
				distances[key] = newDistance
				// чтобы не уйти по пути, по которому пришли
				path[key] = node
			}
		}

		visited.add(node)
	}
	const shortPath = []
	let current = end;
	while (current !== start) {
		// в начало массива короткого пути помещаем current
		shortPath.unshift(current)
		current = path[current]
	}
	shortPath.unshift(start)

	return shortPath;
}

// Взвешенный граф (указаны расстояния между точками)
const graph = {
	a: { b: 2, c: 1, i: 3 },
	b: { a: 2, d: 3 },
	c: { a: 1, d: 3 },
	d: { b: 3, c: 1, e: 5 },
	e: { d: 5, i: 2 },
	i: { a: 3, e: 2 },
};

const result = dijkstra(graph, 'a', 'e');
console.log(result); // [ 'a', 'i', 'e' ]
