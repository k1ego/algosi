// Group Anagrams / medium
// Дан массив строк strs, сгруппируйте все анаграммы в подсписки. Вы можете вернуть вывод в любом порядке.

// Анаграмма — это строка, которая содержит те же символы , что и другая строка, но порядок символов может быть другим.

// Пример 1:
// Input: strs = ["act","pots","tops","cat","stop","hat"]
// Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

class Solution {
	/**
	 * @param {string[]} strs
	 * @return {string[][]}
	 */
	groupAnagrams(strs) {
			let map = {}
			strs.forEach(word => {
					const newSlovo = word.split('').sort().join('')
					
					if (map[newSlovo]) {
							map[newSlovo].push(word)
					} 
					else {
							map[newSlovo] = [word]
					}
			})
			return Object.values(map)
	}
}
