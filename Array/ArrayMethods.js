const people = [
	{ name: 'Кирилл', age: 19, budget: 40000 },
	{ name: 'Елена', age: 17, budget: 3400 },
	{ name: 'Игорь', age: 49, budget: 50000 },
	{ name: 'Михаил', age: 15, budget: 1800 },
	{ name: 'Василиса', age: 24, budget: 25000 },
	{ name: 'Виктория', age: 38, budget: 2300 },
];

// обходы массива
for (let i = 0; i < people.length; i++) {
	console.log(people[i]);
}

for (let person of people) {
	console.log(person);
}

// forEach - не создает новый массив
people.forEach(function (person, index, peopleArray) {
	console.log(person); // каждый объект
	console.log(index); // index с 0
	console.log(peopleArray); // сам массив
});
people.forEach(person => console.log(person));

// Map - создает новый массив
people.map(function (person, index, peopleArray) {
	console.log(person); // каждый объект
	console.log(index); // index с 0
	console.log(peopleArray); // сам массив
});
const newPeople = people.map(person => person.age * 3);
console.log(newPerson);

// Filter - создает новый массив, содержащий все элементы, которые удовлетворяют заданному условию
const adults1 = [];
for (let i = 0; i < people.length; i++) {
	if (people[i].age >= 18) {
		adults1.push(people[i]);
	}
}
console.log(adults1);

people.filter(function (person, index, peopleArray) {
	console.log(person); // каждый объект
	console.log(index); // index с 0
	console.log(peopleArray); // сам массив
});

const adults2 = people.filter(person => person.age >= 18);
console.log(adults2);

// Reduce
// изначально total = 0
let amount1 = 0;
for (let i = 0; i < people.length; i++) {
	amount1 += people[i].budget;
}
const amount = people.reduce((total, person) => total + person.budget, 0);
console.log(amount);

// Find - нужен, чтобы по условию найти какой то элемент
const igor = people.find(person => person.name === 'Игорь');
console.log(igor);

// FindIndex - то же что и find но на выходе получаем index
const igorIndex = people.findIndex(person => person.name === 'Игорь');
console.log(igorIndex);

// ============

const amount2 = people
	.filter(person => person.budget > 3000)
	.map(person => {
		return {
			info: `${person.name} (${person.age})`,
			budget: Math.sqrt(person.budget),
		};
	})
	.reduce((total, person) => total + person.budget, 0);
