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
		this.initTable();
	}

	addTask(taskName, description, priority, deadline) {
		const newTask = new Task(taskName, description, priority, deadline);
		this.tasks.push(newTask);
		this.sortTasks();
		this.renderTasks();
	}

	sortTasks() {
		this.tasks.sort(
			(a, b) => a.priority - b.priority || a.deadline - b.deadline
		);
	}

	initTable() {
		const container = document.querySelector('body');
		const table = document.createElement('table');

		const thead = document.createElement('thead');
		const tr = document.createElement('tr');
		['Статус', 'Задача', 'Дедлайн', 'Приоритет'].forEach(headerText => {
			const th = document.createElement('th');
			th.textContent = headerText;
			tr.appendChild(th);
		});
		thead.appendChild(tr);
		table.appendChild(thead);

		const tbody = document.createElement('tbody');
		table.appendChild(tbody);
		container.appendChild(table);
	}

	renderTasks() {
		const tbody = document.querySelector(`tbody`);
		tbody.innerHTML = '';

		this.tasks.forEach((task, index) => {
			const tr = document.createElement('tr');

			const statusTd = document.createElement('td');
			statusTd.classList.add('toggle-icon')
			statusTd.textContent = '🛑';
			statusTd.addEventListener('click', () =>
				this.toggleTaskStatus(index, statusTd)
			);
			tr.appendChild(statusTd);

			const titleTd = document.createElement('td');
			titleTd.textContent = task.title;
			tr.appendChild(titleTd);

			const deadlineTd = document.createElement('td');
			deadlineTd.textContent = task.deadline.toISOString().split('T')[0];
			tr.appendChild(deadlineTd);

			const priorityTd = document.createElement('td');
			priorityTd.textContent = task.priority;
			priorityTd.style.color = this.getPriorityColor(task.priority);
			tr.appendChild(priorityTd);

			tbody.appendChild(tr);
		});
	}
	toggleTaskStatus(index, statusTd) {
		this.tasks[index].completed = !this.tasks[index].completed;
		statusTd.textContent = this.tasks[index].completed ? '✅' : '🛑';
	}

	getPriorityColor(priority) {
		return priority === 1 ? 'red' : priority === 2 ? 'orange' : 'green';
	}
}

const taskManager = new TaskManager();
taskManager.addTask('Купить продукты', 'Молоко, хлеб, яйца', 2, '2025-03-10');
taskManager.addTask('Сдать проект', 'Закончить отчет', 1, '2025-03-08');
taskManager.addTask('Позвонить врачу', 'Записаться на прием', 3, '2025-03-15');

taskManager.renderTasks();
