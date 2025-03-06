/**
 * Создать класс GridView который позволит на основе входных данных в виде массива
 * формировать различной степени сложности таблицы, которая позволяет конфигурироваться с css
 * причем конфигурировать можно заглавие таблицы, саму таблицу, внешний вид каждой колонки
 * который позволит обрабатывать каждый результат при необходимостиm, задавать кастомные названия колонок, скрывать вывод или модифицировать
 * все это должно быть в стиле ООП
 */

class GridView {
	/**
	 * properties
	 * @param [array] _tableClass - css классы оформления
	 * @param [array] data - входные данные
	 * @param [array] _attribute - управление выводом
	 * @param [array] _element - куда выводить таблицу
	 * @param [array] _header - заголовок таблицы
	 * @param [array] _headerClass - css классы заголовка
	 */

	constructor() {
		this._header = '';
		this._headerClass = [];
		this._tableClass = [];
		this._element = 'body';
		this._attribute = [];
	}

	/**
	 * Method set header
	 */
	setHeader(value) {
		if (typeof value === 'string' && value.trim() !== '') {
			this._header = value.trim();
			return true;
		}
		return false;
	}

	setHeaderClass(classes) {
		if (Array.isArray(classes)) {
			this._headerClass = classes;
			return true;
		}
		return false;
	}

	setElement(selector) {
		const elem = document.querySelector(selector);
		if (elem) {
			this._element = elem;
			return true;
		}
		return false;
	}

	setAttribute(attr) {
		if (typeof attr === 'object') {
			this.attribute = attr;
			return true;
		}
		return false;
	}

	/**
	 * Method for show GridViewTable
	 */
	render(data) {
		this.setElement(data.element);
		this.setHeaderClass(data.headerClass);
		this.setHeader(data.header);
		this.setAttribute(data.attribute);
		this.data = data.data;
		// show header
		if (this._header) {
			const header = document.createElement('h1');
			header.textContent = this._header;
			this._headerClass.forEach(cssClass => {
				header.classList.add(cssClass);
			});
			document.querySelector(this._element).append(header);
		}

		// show table
		const table = document.createElement('table');
		this._tableClass.forEach(cssClass => {
			table.classList.add(cssClass);
		});

		// create table header
		let trHeader = document.createElement('tr');
		for (let key in this.attribute) {
			let th = document.createElement('th');
			if (this.attribute[key].label) {
				th.textContent = this.attribute[key].label.toUpperCase();
			} else {
				th.textContent = key;
			}
			trHeader.append(th);
		}
		table.append(trHeader);
		// create table content
		for (let i = 0; i < data.data.length; i++) {
			let dataArr = data.data[i];
			let tr = document.createElement('tr');
			for (let key in this.attribute) {
				let td = document.createElement('td');
				let value = dataArr[key];
				// проверка на наличие функции в value
				if (this.attribute[key].value) {
					value = this.attribute[key].value(dataArr);
				}
				if (this.attribute[key].src) {
					td.innerHTML = value;
				} else {
					td.textContent = value;
				}
				tr.append(td);
			}
			table.append(tr);
		}
		document.querySelector(this._element).append(table);
	}
}
