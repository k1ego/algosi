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
