/* На вход подается список правил сортировки и список последовательностей чисел. Правило сортировки имеет вид X|Y и обозначает, что если в последовательности встречаются оба числа X и Y, то X обязательно должен входить в последовательность раньше, чем Y. Последовательность чисел представлена массивом чисел, все числа последовательности разные. Необходимо определить количество корректных последовательностей для заданных правил сортировки.

		Формат ввода
Входные данные представлены одной строкой со следующей структурой

Сначала перечисляются правила в формате X|Y, разделенные символом переноса строки.
Затем следует пустая строка.
Затем перечисляются последовательности чисел, разделенные символом переноса строки. Числа в последовательности разделены пробелом и запятой.

Например, рассмотрим входные данные:

28|12
5|9
9|2

10, 5, 15, 28, 9, 12
2, 7, 12, 5, 9
4, 8, 16, 32, 64

*/

function solution(input) {
	const [rulesPart, sequencesPart] = input.split('\n\n');
	const rules = rulesPart.split('\n').map(rule => rule.split('|').map(Number));
	const sequences = sequencesPart.split('\n').map(seq => seq.split(/,?\s+/).map(Number));
	
	function isValidSequence(sequence) {
			const indexMap = new Map(sequence.map((num, idx) => [num, idx]));
			for (const [x, y] of rules) {
					if (indexMap.has(x) && indexMap.has(y)) {
							if (indexMap.get(x) > indexMap.get(y)) {
									return false;
							}
					}
			}
			return true;
	}
	
	return sequences.filter(isValidSequence).length;
}
