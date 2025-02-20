/**
 * Реализуйте функцию, которая принимает на вход два объекта Promise
 * с типом `number` и возвращает Promise с их суммой
 */
var addTwoPromises = async function (promise1, promise2) {
	return Promise.all([promise1, promise2])
	.then(([v1, v2]) => v1 + v2)
	.catch((error) => 'error')
};

addTwoPromises(Promise.resolve(2), Promise.resolve(2))
    .then(console.log); // 4