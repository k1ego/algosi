/**
 * constructor - нужен для того, чтобы установить свойства объекта, когда мы его создаем на основе класса
 * this внутри конструктора ссылается на вновь созданный объект
 * методы - обычные функции, расположенные внутри класса
 */

let a = 'Ivan'
let b = '7778880'

// объект на основе класса
const person = new User(a, b)

console.log(person)
console.log(person.validatePassword())

let firstStudent = new Student('Ivan', '7778880', 'Ivanov')
console.log(firstStudent.getStudentCourses())
console.log(firstStudent.validatePassword())