function dailyTemperatures(temperatures) {
	const n = temperatures.length;
	const res = new Array(n).fill(0);

	for (let i = 0; i < n; i++) {
			let count = 1;
			let j = i + 1;
			while (j < n) {
					if (temperatures[j] > temperatures[i]) {
							break;
					}
					j++;
					count++;
			}
			count = (j === n) ? 0 : count;
			res[i] = count;
	}
	return res;
}

console.log(dailyTemperatures([30,38,30,36,35,40,28]))