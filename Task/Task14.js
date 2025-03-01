/* В вашем корпоративном календаре сломался планнер встреч, который отвечал за создание встреч и проверку занятости участников.

Вам необходимо реализовать функцию createMeeting, которая принимает на вход конфиг, который содержит список встреч сотрудников и параметры создаваемой встречи, а результатом должна вернуть статус создания встречи.
Пример: 
Ввод
{
  "meetings": [
    {
      "from": 1,
      "to": 3,
      "person": "Петя"
    },
    {
      "from": 2,
      "to": 4,
      "person": "Вася"
    },
    {
      "from": 4,
      "to": 6,
      "person": "Костя"
    },
    {
      "from": 2,
      "to": 4,
      "person": "Женя"
    }
  ],
  "params": {
    "from": 3,
    "to": 4,
    "persons": [
      "Петя",
      "Костя"
    ]
  }
}
Вывод
{
  status: 'CREATED'
	*/

module.exports = function createMeeting(config) {
	const { meetings, params } = config;
	const { from, to, persons } = params;
	
	let busyPersons = new Set();
	
	for (const meeting of meetings) {
			for (const person of persons) {
					if (meeting.person === person && !(meeting.to <= from || meeting.from >= to)) {
							busyPersons.add(person);
					}
			}
	}
	
	if (busyPersons.size > 0) {
			return {
					status: 'REJECTED',
					reason: Array.from(busyPersons).sort()
			};
	}
	
	return { status: 'CREATED' };
};