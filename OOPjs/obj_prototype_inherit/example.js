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

