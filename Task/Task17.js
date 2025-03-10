// 338. Counting Bits

// Для заданного целого числа nвернуть массив ansдлины n + 1такой, что для каждогоi ( 0 <= i <= n) — ans[i]это количество 1символов в двоичном представлении

// Пример 2:

// Вход: n = 5
//  Выход: [0,1,1,2,1,2]
//  Пояснение: 
// 0 --> 0 
// 1 --> 1 
// 2 --> 10 
// 3 --> 11 
// 4 --> 100 
// 5 --> 101

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
	const ans = new Array(n + 1).fill(0)

	for (let i = 0; i <= n; i++) {
			
			let current = 0
			let temp = i;

			while (temp) {
					current += temp & 1

					temp >>= 1
			}

			ans[i] = current
	}
	return ans
};