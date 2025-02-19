// дан массив чисел в нем нужно найти k элементов, которые повторяются больше всего раз в массиве

// Input: nums=[1, 1, 1, 2, 2, 3], k = 2
// Output: [1, 2]

function topKFrequent(nums, k) {
	const myMap = new Map()
	const result = []

	if (k < 1) {
		return "k must be greater than or equal to 1"
	}

	nums.forEach((num) => {
		myMap.set(num, myMap.get(num) + 1 || 1)
	})	
	
	const mapValues = Array.from(myMap).sort((a, b) => b[1] - a[1])

	for (let i = 0; i < k; i++) {
		result.push(mapValues[i][0])
	}
	return result
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))