// https://jsonplaceholder.typicode.com/posts

const newPost = {
	userId: 1,
	id: 7777777,
	title: 'hello world',
	body: 'bar',
};

fetch('https://jsonplaceholder.typicode.com/posts', {
	method: 'POST',
	body: JSON.stringify(newPost),
}).then(data => {
	console.log(data);
});

// ========================================

const url = `
https://api.open-meteo.com/v1/forecast?
latitude=55.751244&
longitude=37.618423&
current=temperature_2m,is_day,wind_speed_10m
`;

fetch(url)
	.then(data => {
		return data.json();
	})
	.then(info => {
		renderWeather(info.current);
	});

function renderWeather(data) {
	const div = document.createElement('div');
	div.textContent = `
				Температура: ${data.temperature_2m}
				Скорость ветра: ${data.wind_speed_10m}
				Сейчас: ${data.is_day ? 'День' : 'Ночь'}
			`;
	document.body.append(div);
}

// ========================================
// Разница между fetch и axios

// fetch
fetch('https://jsonplaceholder.typicode.com/posts', {
	method: 'POST',
	headers: { 'Content-Type': 'application/json' },
	body: JSON.stringify({ title: 'Test' }),
})
	.then(response => response.json()) // Нужно явно преобразовывать в JSON
	.then(data => console.log(data))
	.catch(error => console.error('Ошибка:', error));

// axios
axios
	.post('https://jsonplaceholder.typicode.com/posts', { title: 'Test' })
	.then(response => console.log(response.data)) // JSON-ответ уже парсится автоматически
	.catch(error => console.error('Ошибка:', error));


	
// fetch (нужно вручную проверять статус)
fetch('https://jsonplaceholder.typicode.com/posts/invalid')
	.then(response => {
		if (!response.ok) {
			throw new Error(`Ошибка HTTP: ${response.status}`);
		}
		return response.json();
	})
	.catch(error => console.error(error));

// axios (ошибка выбрасывается автоматически)
axios
	.get('https://jsonplaceholder.typicode.com/posts/invalid')
	.then(response => console.log(response.data))
	.catch(error => console.error(error)); // axios сам обрабатывает ошибки
