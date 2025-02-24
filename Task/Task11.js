function getCompressedString(text) {
	const words = text.match(/[a-zA-Zа-яА-ЯёЁ]+/gu) || [];

	const freqMap = new Map();
	for (const word of words) {
			const lowerWord = word.toLowerCase();
			freqMap.set(lowerWord, (freqMap.get(lowerWord) || 0) + 1);
	}

	const orderMap = new Map();
	let orderCounter = 0;
	for (const word of words) {
			const lowerWord = word.toLowerCase();
			if (!orderMap.has(lowerWord)) {
					orderMap.set(lowerWord, orderCounter++);
			}
	}

	const sortedWords = [...freqMap.keys()].sort((a, b) => {
			return freqMap.get(b) - freqMap.get(a) || orderMap.get(a) - orderMap.get(b);
	});

	const wordIndexMap = new Map(sortedWords.map((word, index) => [word, index]));

	return text.replace(/[a-zA-Zа-яА-ЯёЁ]+/gu, (match) => {
			return wordIndexMap.get(match.toLowerCase());
	});
}

console.log(getCompressedString('Привет, как у тебя дела? Да, вроде, хорошо, а у тебя?')) // 2 3 0 1 4! 5 6 1 7 0?