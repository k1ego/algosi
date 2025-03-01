// необходимо реализовать метод groupBy, расширающий стандартные методы массивов. метод должен возвращать сгруппированную версию массива - объект, в котором каждый ключ является результатом выполнения переданной функции fn(arr[i]), а каждое значение - массивом, содержащим все элементы исходного массива с этим ключом. javascript, пример использования: 



const array1 = [ {id: 1}, {id: 1}, {id: 2}];
const fn = (item) => item.id;
console.log(array1.gropuBy(fn));
// {1: [{id: 1}, {id: 1}], 2: [{id:2}]}

console.log(func(array2.groupBy(Math.round)))
const array2 = [3.4, 0.5, 1.5]



Array.prototype.groupBy = function (func) {
	const resultObj = {}
	for (let i = 0; i < this.this.length; i++) {
		if (!resultObj[func(this[i])]) {
			resultObj[func(this[i])] = [this[i]]
		} else {
			resultObj[func(this[i])] = [func(this[i])].push(this[i])
		}
	}
	return resultObj
}


Array.prototype.groupBy = function (func) {
	
}

