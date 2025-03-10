// №9 Дано целое число x, вернуть, true если x это палиндром, и false в противном случае.

// Пример 1:

// Ввод: x = 121
//  Вывод: true
//  Пояснение: 121 читается как 121 слева направо и справа налево.
// Пример 2:

// Ввод: x = -121
//  Вывод: false
//  Пояснение: Слева направо читается как -121. Справа налево становится 121-. Поэтому это не палиндром.

var isPalindrome = function (x) {
	if (x < 0) {
		return false;
	}
	const stroka = x.toString();
	const reverseStroka = stroka.split('').reverse().join('');

	return stroka === reverseStroka;
};

// второе решение более математическое

var isPalindrome = function (x) {
	if (x < 0) return false;

	let original = x;
	let reversed = 0;

	while (x > 0) {
		let LastDigit = x % 10;
		reversed = reversed * 10 + LastDigit;
		x = Math.floor(x / 10);
	}

	return original === reversed;
};
