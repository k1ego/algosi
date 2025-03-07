/**
 * Задание: Реализация системы управления задачами с приоритетами
 * Функциональность:
 * Создание задачи с названием, описанием, приоритетом и дедлайном.

 * Автоматическое определение приоритетности задач:
	Чем выше приоритет (1 - высокий, 2 - средний, 3 - низкий), тем раньше выполняется задача.

 * Если у задач одинаковый приоритет, сортировка идет по дедлайну (раньше срок – 	выше в списке).

 * Выполнение задач в порядке их важности.
 * Просмотр всех задач в порядке их выполнения.
 * Удаление выполненных задач из списка.
 * Редактирование задач (изменение названия, описания, приоритета и дедлайна).

 * Дополнительное требование:
	При добавлении задачи список должен автоматически пересортировываться, чтобы 	самая важная задача была первой.
 */

class Task {
	constructor(taskName, description, priority, deadline) {
		this.title = taskName;
		this.description = description;
		this.priority = priority; // 1 - высокий, 2 - средний, 3 - низкий
		this.deadline = new Date(deadline);
		this.completed = false;
	}
}

class TaskManager {
	constructor() {
		this.tasks = [];
	}
	addTask(taskName, description, priority, deadline) {
		const newTask = new Task(taskName, description, priority, deadline);
		this.tasks.push(newTask);
		this.sortTask();
	}
	sortTask() {
		this.tasks.sort((a, b) => {
			if (a.priority !== b.priority) {
				return a.priority - b.priority;
			}
			return a.deadline - b.deadline;
		});
	}
	taskComplete(title) {
		const task = this.tasks.find(t => t.title === title);
		if (task) task.complete = true;
	}
	deleteCompletedTask() {
		this.tasks = this.tasks.filter(t => !t.completed);
	}
	listTasks() {
		console.log('\n📋 Текущие задачи:');
		this.tasks.forEach((task, index) => {
			let priorityIcon =
				task.priority === 1 ? '🛑' : task.priority === 2 ? '✅' : '🟢';
			console.log(
				`[${index + 1}] ${priorityIcon} ${
					task.title
				} | Дедлайн: ${task.deadline.toDateString()} | Приоритет: ${
					task.priority
				}`
			);
		});
	}
}

const taskManager = new TaskManager();
taskManager.addTask('Купить продукты', 'Молоко, хлеб, яйца', 2, '2025-03-10');
taskManager.addTask('Сдать проект', 'Закончить отчет', 1, '2025-03-08');
taskManager.addTask('Позвонить врачу', 'Записаться на прием', 3, '2025-03-15');

taskManager.listTasks(); // Выведет отсортированный список задач
