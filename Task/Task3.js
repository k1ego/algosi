// нужно найти максимальный по длинне префикс среди слов данных на вход

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

function longestCommonPrefix(strs) {
	if (strs.length == 0) {
		return 'Strs must not be empty';
	}

	let prefix = strs[0];

	for (let i = 1; i < strs.length; i++) {
		while (strs[i].indexOf(prefix) !== 0) {
			prefix = prefix.slice(0, -1);

			if (prefix === '') {
				return '';
			}
		}
	}
	return prefix;
}

console.log(longestCommonPrefix(["flower","flow","flight"]))