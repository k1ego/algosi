/**
 * Написать функцию, которая определяет, является ли переданная строка палиндромом
 * (читается слева-направо и справа-налево одинаково).
 *
 * Примеры:
 * — Казак → true
 * — А роза упала на лапу Азора → true
 * — Do geese see God? → true
 * — Madam, I’m Adam → true
 * — Baraban → false
 */

function isLetter(char) {
	return char.toLowerCase() !== char.toUpperCase();
}

function isPalindrome(str) {
	let start = 0;
	let end = str.length - 1;


	while (start < end) {
		if (!isLetter(str[start])) {
			start += 1;
			continue;
		}
		if (!isLetter(str[end])) {
			end -= 1;
			continue;
		}
		if (str[start].toLowerCase() !== str[end].toLowerCase()) {
			return false;
		}

		start += 1;
		end -= 1;
	}
	return true;
}

console.log(isPalindrome('Казак'));
console.log(isPalindrome('Baraban'));
