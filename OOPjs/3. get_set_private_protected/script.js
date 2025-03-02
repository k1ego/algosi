// Защищенные(_) Protected свойства помечаются нижним подчеркиванием и используют getter/setter для доступа

// Private(#) методы и свойства - доступны только внутри класса, чаще всего используют для служебных целей

class User {
	constructor(name) {
		// this._name = name;
	}
	#test = 'Hohohoh';
	set namik(name) {
		console.log('Privat = ' + this.#test);
		this._name = name.trim().toLowerCase();
	}
	get namik() {
		return this._name;
	}
	one() {
		console.log(this.#test);
	}
}

const student = new User('Dimych');

// set и get позволяет с методом объекта работать как с свойствами объекта, делается это для безопасности и для удобства
student.namik = '   Ivan  '; // setter вызывается
console.log(student);
console.log(student.namik); // getter вызывается



class User2 extends User {}
const student2 = new User2();
student2.one();
// student2.#test - так нельзя
student2.namik = 'Oleg';