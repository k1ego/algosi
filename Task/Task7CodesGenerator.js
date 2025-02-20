// Хозяину отеля необходимо программа, которая будет генерировать коды для дверей номеров.
// Требуется написать функцию createCodesGenerator, которая принимает два параметра:
// 1. min, number - минимальный код;
// 2. max, number - максимальный код.
// Функция createCodesGenerator должна возвращать новую функцию,
// Которая будет использоваться для получения кода и возвращать код в строковом формате.
// Формат кода: если max 1000, то коды будут формата '0001', '0140' и тп. Если max 10000, то '00001'
// Задачу необходимо решить самым оптимальным способом (за меньшее big 0).
// Коды не должны повторяться и требуется выдавать коды в случайном порядке.

function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]]
	}
}

function createCodesGenerator(min, max) {

	const length = max - min + 1;
	let codes = Array.from({ length }, (_, index) => {
		const code = String(min + index)
		return code.padStart(String(max).length, '0')
	})
	shuffle(codes)

	let currentCodeIndex = -1;

	return () => {
		currentCodeIndex += 1;

		if (currentCodeIndex > codes.length - 1) {
			return "Все коды зарезервированы"
		}
		return codes[currentCodeIndex]
	}
}

const generateCode = createCodesGenerator(1, 1000)

for (let i = 1; i <= 1000; i++) {
	console.log(generateCode())
}