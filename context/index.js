// 1. this в обычных функциях

function myFunction1() {
	function myFunction() {
		console.log(this);
	}
	myFunction();
}

myFunction1(); // будет выведено Object [global] в node.js

// 2. this в методе объекта

const item = {
	title: 'Phone',
	fullPrice: 100,
	calculatePrice(discountPercent = 0) {
		console.log(this.fullPrice - (discountPercent / 100) * this.fullPrice);
	},
};

item.calculatePrice(20); // 80

// 3. Вызов функции с привязкой контекста

function myFunction() {
	console.log(this);
}

// call и apply привязывают контекст и вызывают функцию мгновенно
const item1 = { title: 'phone' };
myFunction.call(item1); // {title: 'phone'}
myFunction.apply(item1); // {title: 'phone'}

// второй пример

function calcDiscount(age) {
	if (age > 65) {
		console.log(this.price / 2);
	} else {
		console.log(this.price);
	}
}

const item2 = { title: 'phone', price: 1000 };
calcDiscount.call(item2, 70); // 500

// Разница между call и apply в том, что call принимает сколько угодно аргументов по одному
// .call(obj, a, b, c ...)
// А apply принимает вторым аргументом массив значений - это удобно, когда заранее неизвестно сколько аргументов будет передано функции
// .apply(obj, [a, b, c])
// Также есть еще и .bind который не вызывает функцию мгновенно, а привязывает к ней нужный контекст и возвращает новую функцию

function calcDiscount(age) {
	if (age > 65) {
		console.log(this.price / 2);
	} else {
		console.log(this.price);
	}
}

const item3 = { title: 'phone', price: 1000 };
const calcDiscountForElderly = calcDiscount.bind(item3, 70);
calcDiscountForElderly(); // 500

// 4. this в функциях-конструкторах

function myFunction() {
	console.log(this);
}

new myFunction(); // myFunction {}

// во время вызова функции js создает новый пустой объект, который и становится значением this внутри myFunction()

function createItem(title, price) {
	this.title = title;
	this.price = price;
	console.log(this);
}

new createItem('phone', 100); // createItem {title: 'phone', price: 100}

// return this в createItem писать не обязательно, функции с ключевым словом new по умолчанию возвращают созданный объект

// ну и так можно создавать бесконечное количество разных товаров

function CreateItem(title, price) {
	this.title = title;
	this.price = price;
}

const someItem1 = new CreateItem('phone', 100);
const someItem2 = new CreateItem('phone', 300);
const someItem3 = new CreateItem('phone', 500);
console.log(someItem1, someItem2, someItem3);

// 5. this в стрелочных функциях

// у стрелочных функций нет своего this:
// Значение this берется из внешней функции

const obj = {
	getThis1: function () {
		console.log(this);
	},
	getThis2: () => {
		console.log(this);
	},
};

obj.getThis1(); // obj Тк это обычная функция и она взяла в качестве this родительский объект
obj.getThis2(); // window берет this из ближайшей родительской функции, но у нас такой нет

const obj2 = {
	lastName: 'Ivanov',
	firstNames: ['Petr', 'Ivan'],
	logFullNames1: function () {
		this.firstNames.forEach(function (name) {
			console.log(`${this.lastName} ${name}`);
		});
	},
	logFullNames2: function () {
		this.firstNames.forEach(name => {
			console.log(`${this.lastName} ${name}`);
		});
	},
};

obj2.logFullNames1(); // undefined Petr undefined Ivan
obj2.logFullNames2(); // Ivanov Petr Ivanov Ivan

// когда обычная функция (первая здесь) пытается определить this внутри себя - в него попадает
// второй аргумент из forEach (то есть контекст вызова) а он будет являться undefined тк не передан

// стрелочная функция не будет пытаться определить this внутри себя, а обратиться к ближайшей родительской функции
// а у нее this - это объект, он и будет использован

// Чтобы исправить logFullNames1 передадим контекст вызова

const obj3 = {
	lastName: 'Ivanov',
	firstNames: ['Petr', 'Ivan'],
	logFullNames1: function () {
		this.firstNames.forEach(function (name) {
			console.log(`${this.lastName} ${name}`);
		}, this);
	},
};

obj3.logFullNames1(); // Ivanov Petr Ivanov Ivan

// 6. this в setTimeout()

const item6 = {
	title: 'Phone',
	logTitle: function () {
		setTimeout(function () {
			console.log(`Product: ${this.title}`);
		});
	},
};

item6.logTitle(); // Product: undefined

// undefined тк setTimeout вызывается не как метод объекта, функция в setTimeout вызывается позже в глобальном контексте
// то есть this внутри коллбэка setTimeout не будет указывать на объект, к которому функция принадлежит, а вместо этого будет указывать на глобальный объект

const item7 = {
	title: 'Phone',
	logTitle: function () {
		setTimeout(() => {
			console.log(`Product: ${this.title}`);
		});
	},
};

item7.logTitle(); // Product: Phone

// теперь здесь callback в setTimeout не имеет своего this и берет его из функции метода

// но можно заставить работать с обычной функцией

const item8 = {
	title: 'Phone',
	logTitle: function () {
		setTimeout((function () {
			console.log(`Product: ${this.title}`);
		}).bind(this));
	},
};

item8.logTitle(); // Product: Phone

// оборачиваем в () функцию, чтобы создать function expretion и привязываем к ней контекст с помощью bind
// тогда setTimeout получит функцию с привязанным контекстом и он будет использоваться внутри функции
// this который мы привязываем находится в функции методе, поэтому указывает на item8