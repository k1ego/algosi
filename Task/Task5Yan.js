/*
	Необходимо реализовать функцию `splitWordsBySeparator`
 * Разделяет строки в массиве `words` по символу `separator`.
 * Необходимо вернуть массив получившихся после разделения строк,
 * исключая пустые строки
 */

	var splitWordsBySeparator = function(words, separator) {
    const result = [];
    for (const word of words) {
        const value = word.split(separator);
        value.forEach((v) => {
            if (v.length) {
                result.push(v);
            }
        });
    }
    return result;
};

console.log(splitWordsBySeparator([], "")); // []
console.log(splitWordsBySeparator(['abc'], ",")); // ['abc']
console.log(splitWordsBySeparator(['a.b', 'c.d'], ".")); // ['a', 'b', 'c', 'd']
console.log(splitWordsBySeparator(['a.b', '.c.d'], ".")); // ['a', 'b', 'c', 'd']