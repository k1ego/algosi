function dailyTemperatures(temperatures) {
	let result = new Array(temperatures.length).fill(0);
	let stack = [];

	for (let i = 0; i < temperatures.length; i++) {
		// текущее значение
		const curValue = temperatures[i];

		// значение последнего элемента в стеке
		// stack[stack.length - 1][0]

		while (stack.length > 0 && curValue > stack[stack.length - 1][0]) {
			// достаем значение и индекс верхнего элемента в стеке
			const [stackValue, stackIndex] = stack.pop();

			result[stackIndex] = i - stackIndex;
		}

		stack.push([curValue, i]);
	}
	return result;
}

console.log(dailyTemperatures([30,38,30,36,35,40,28]))