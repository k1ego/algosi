let obj = {
	"name": "Test",
	"color": 'red',
	show () {
		console.log(this.color)
	}
}

let secondObj = {
	"font": "Arial",
	__proto__: obj
}

console.log(secondObj.hasOwnProperty('name')) // false
console.log(secondObj.hasOwnProperty('font')) // true

// ===============================

let dimych = { name: 'Dimych' };

console.log(dimych.toString()); // Вывод: [object Object]

// Проверяем прототип dimych
console.log(dimych.__proto__); // Вывод: { toString: ƒ }
console.log(dimych.__proto__ === Object.prototype); // Вывод: true