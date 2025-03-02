/**
 * description
 */

class User {
	// свойства
	constructor(username, password) {
		this.username = username;
		this.password = password;
	}
	// метод
	validatePassword() {
		console.log('work parent pass')
		if (this.password.length > 6) {
			return true;
		} else {
			return false;
		}
	}
}
