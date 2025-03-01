/*
Напишите асинхронную функцию, которая принимает url и recordId а возвращает Promise c объектом который сдержит три метода:

getTitle: метод возвращает заголовок записи (поле title).
getSummary: метод возвращает краткое описание (поле summary).
getDetails: метод возвращает подробное описание (поле details).
Данные базы знаний необходимо отфильтровать, чтобы получить конкретную запись по указанному идентификатору recordId. Сервер отвечает в формате JSON со следующей структурой:

{
  "records": [
    {
      "id": 101,
      "title": "Теория относительности",
      "summary": "Теория относительности в кратком описании.",
      "details": "Теория относительности Альберта Эйнштейна объясняет природу гравитации как результат искривления пространства-времени."
    },
    {
      "id": 102,
      "title": "Квантовая механика",
      "summary": "Введение в квантовую механику.",
      "details": "Квантовая механика описывает физику на малых масштабах, включая поведение атомов и субатомных частиц."
    },
    ...
  ]
}
	*/
async function getRecord(url, recordId) {
	try {
			const response = await fetch(url);
			const data = await response.json();
			
			if (!data || !data.records || !Array.isArray(data.records)) {
					throw new Error(`Неожиданный формат данных: ${url}`);
			}
			
			const record = data.records.find(rec => rec.id === recordId);
			if (!record) {
					throw new Error(`Запись не найдена, id: ${recordId}`);
			}
			
			return {
					getTitle: () => record.title,
					getSummary: () => record.summary,
					getDetails: () => record.details
			};
	} catch (error) {
			throw error;
	}
}