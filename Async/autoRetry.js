/**
 * Напишите функцию `fetchWithAutoRetry`, которая будет автоматически
 * перезапрашивать данные с сервера в случае ошибки до тех пор, пока
 * не будет достигнуто максимальное количество попыток (аргумент `count`).
 */

var fetchWithAutoRetry = async function (fetcher, count) {
	let error;

	while (count) {
		try {
			res = await fetcher();

			return res;
		} catch (innerError) {
			count - 1;
			error = innerError;
		}
	}
	return Promise.reject(error);
};
