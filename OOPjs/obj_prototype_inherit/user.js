let user = {
	login: '',
	password: '',
	validatePassword: function () {
		if (this.password.length > 6) {
			return true;
		} else {
			return false;
		}
	},
};
