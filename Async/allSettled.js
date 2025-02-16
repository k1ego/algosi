// необходимо написать полифил Promise.allSettled

allSettled([
	Promise.resolve(1),
	Promise.reject(2),
	3,
	new Promise(resolve => {
		setTimeout(() => resolve(4), 1000);
	}),
]).then(res => {
	console.log('__RES__', res); // result
	// { status: 'fulfilled', value: 1 },
	// { status: 'rejected', reason: 2 },
	// { status: 'fulfilled', value: 3 },
	// { status: 'fulfilled', value: 4 }
});

// ===============

// решение

function allSettled(promises = []) {
	const res = new Array(promises.length);
	// количество обработанных промисов
	let countProcessedPromises = 0;

	return new Promise((resolve) => {
		promises.forEach((promise, index) => {
			Promise.resolve(promise)
				.then(localRes => {
					res[index] = { status: 'fulfilled', value: localRes };
				})
				.catch(err => {
					res[index] = { status: 'rejected', reason: err };
				})
				.finally(() => {
					countProcessedPromises += 1;
					if (countProcessedPromises >= promises.length) {
						resolve(res);
					}
				});
		});
	});
}
