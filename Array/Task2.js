// Top K Frequent Elements / medium

// Дан массив целых чисел numsи целое число k, вернуть kнаиболее часто встречающиеся элементы в массиве.
// Тестовые случаи генерируются таким образом, что ответ всегда уникален .
// Вы можете вернуть выходные данные в любом порядке .

// Example 1:
// Input: nums = [1,2,2,3,3,3], k = 2
// Output: [2,3]

// Example 2:
// Input: nums = [7,7], k = 1
// Output: [7]

class Solution {
	/**
	 * @param {number[]} nums
	 * @param {number} k
	 * @return {number[]}
	 */
	topKFrequent(nums, k) {
			let result = []
			let myMap = new Map()
			nums.forEach(digit => {
					myMap.set(digit, myMap.get(digit) + 1 || 0)
			})
			let sortMap = Array.from(myMap).sort((a, b) => b[1] - a[1]);
			for (let i = 0; i < k; i++) {
					result.push(sortMap[i][0])
			}
			return result
	}
}
