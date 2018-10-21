(function() {
	$(document).ready(function() {
		init_api();

		if(window.api.auth.checkLevel() < api.constants.ADMINISTRATOR) {
			alert("You need to log in to access this page!");
			window.location = "/";
			return;
		}

		window.api.acall = window.api.acall || {};

		let enl = function enl(x) {
			if(x === "")
				return null;
			return x;
		};

		let enn = function enn(x) {
			if(x == -1)
				return null;
			return x;
		};

		window.api.acall.createModifyUser = function() {
			let username = enl($("#create-modify-usr #username").val());
			let password = enl($("#create-modify-usr #password").val());
			let fname = enl($("#create-modify-usr #fname").val());
			let lname = enl($("#create-modify-usr #lname").val());
			let email = enl($("#create-modify-usr #email").val());
			let phone = enl($("#create-modify-usr #phone").val());
			let auth = enn($("#create-modify-usr #auth").val());

			ret = window.api.auth.modifyUser({
				username: username,
				password: password,
				first_name: fname,
				last_name: lname,
				phone_number: phone,
				email: email,
				authorization: auth
			});

			if(ret == window.api.constants.NEW_USER)
				ret = "New user created!";
			else if(ret == window.api.constants.MOD_USER)
				ret = "User modified successfully";

			$("#create-modify-usr #output").text(ret);
		};
	});
})();