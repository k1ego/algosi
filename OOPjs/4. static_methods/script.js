// Статические методы

class User {
	static test = true;
	constructor(name) {
		this.name = name
	}
	static getRole() {
		/**
		 * реализация
		 */
		return 'admin'
	}
	static getEmail(email) {
		return email
	}
	static getUser(id) {
		// return user
	}
}

const person = new User('Ivan')
console.log(person)

// Dimych - > перейти на форум
// чтобы достучаться до getRole: class - > объект - > object.getRole()

// статические методы - методы, которые прописаны в классе как и обычные методы, НО их вызвать можно без
// создания экземпляра класса (объекта) то есть шаг "объект" после class можно пропустить

// console.log(User.getRole()) если не будет static, то не будет работать будет работать только так console.log(person.getRole()) без static

console.log(User.getRole()) // admin
console.log(User.getEmail('alex@example.com')) // alex@example.com
console.log(User.test) // true
console.log(person.test) // undefined

// проверяем наследование
class Student extends User {
	// перезатираем свойство
	static test = false
	constructor(name) {
		super()
	}
}

console.log(Student.getRole()) // admin
console.log(Student.test) // true

// для того чтобы определить, что метод является статическим - при создании объекта непонятно, что туда прокидывать, вероятно это свойство/метод static