// необходимо реализовать функцию retry, которая может принимать в себя 2 параметра:
// 1. асинхронная функция
// 2. config: { count: number, delay: (count) => number }

// если асинхронная функция возвращает промис в статусе rejected,
// то необходимо перезапустить данную функцию config.count раз с задержкой в config.delay мс,
// пока промис не перейдет в статус fulfilled либо количество возможных попыток config.count будет исчерпано.
// Функция retry должна возвращать промис.

function test() {
	return new Promise((resolve, reject) => {
		setTimeout(() => reject('Hello World Error'), 1000);
	});
}

retry(test, { count: 5, delay: retryCount => retryCount * 1000 })
	.then(res => console.log('res', res))
	.catch(err => console.log('err', err));

function retry(promiseFn, config) {
	let retryCount = 0;

	return new Promise((resolve, reject) => {
		tryPromiseFn();

		function doFinalCheck() {
			retryCount += 1;
			if (retryCount > config.count) {
				return reject(new Error('Количество попыток исчерпано'));
			}

			const delayMs = config.delay(retryCount);
			setTimeout(() => {
				tryPromiseFn();
			}, delayMs);
		}

		function tryPromiseFn() {
			try {
				promiseFn()
					.then(res => {
						resolve(res);
					})
					.catch(() => {
						doFinalCheck();
					});
			} catch {
				doFinalCheck();
			}
		}
	});
}
