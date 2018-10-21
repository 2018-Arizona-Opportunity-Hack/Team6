(function init_api() {
	let api = {};
	api.constants = {};
	api.auth = {};
	api.events = {};
	api.database = {};

	// Constants for user level
	api.constants.GUEST = 0;
	api.constants.MEMBER = 1;
	api.constants.ADMINISTRATOR = 2;

	// Constants for user modification
	api.constants.NEW_USER = 1;
	api.constants.MOD_USER = 2;

	/* Data for fudging. Should not exist in the real world */
	let users = {};
	users["yash101"] = {
		username: "yash101",
		password: "password1",
		authorization: api.constants.ADMINISTRATOR,
		first_name: "Dev",
		last_name: "Lodha",
		phone_number: "+19990000000",
		email: "hackeryash101@gmail.com"
	};
	users["jacob"] = {
		username: "jacob",
		password: "password2",
		authorization: api.constants.MEMBER,
		first_name: "Jake",
		last_name: "Fl",
		phone_number: "+19990000001",
		email: "jake@example.com"
	};

	let internalData = {};

	/*
	Returns: String when error
	Returns: True when log in successful
	*/
	api.auth.logIn = function(username, password) {
		if(users[username] && users[username].password == password) {
			internalData.currentUser = username;
			return true;
		}
		return "Invalid Username or Password";
	};

	/*
	Returns: int authorization level. 0 if undefined (guest)
	*/
	api.auth.checkLevel = function() {
		if(!internalData.currentUser) {
			return 0;
		}

		return users[internalData.currentUser].authorization;
	};

	/*
	returns api.constants.MOD_USER or api.constants.NEW_USER if successful
	returns a string with error if failure
	*/
	api.auth.modifyUser = function(user) {

		// user = {username, password, authorization, first_name, last_name, phone_number, email}

		let currentLevel = api.auth.checkLevel();

		// Find the current existing user
		let find = users[user.username];

		// If the user does not exist:
		if(!find) {
			// Create new user
			if(!user.username) return "Username bad";
			if(!user.password) return "Password bad";
			if(!user.first_name) return "First name bad";
			if(!user.last_name) return "Last name bad";
			if(!user.phone_number) return "Phone number bad";
			if(!user.email) return "Email bad";

			users[user.username] = {
				username: user.username,
				password: user.password,
				first_name: user.first_name,
				last_name: user.last_name,
				phone_number: user.phone_number,
				email: user.email,
				authorization: 1
			};

			return api.constants.NEW_USER;
		} else {
			let curUser = users[user.username];

			curUser = {
				username: user.username || curUser.username,
				password: user.password || curUser.password,
				first_name: user.first_name || curUser.first_name,
				last_name: user.last_name || curUser.last_name,
				phone_number: user.phone_number || curUser.phone_number,
				email: user.email || curUser.email,
				authorization: curUser.authorization
			};

			if(currentLevel >= api.constants.ADMINISTRATOR && user.authorization != undefined) {
				curUser.authorization = user.authorization;
			}

			users[user.username] = curUser;

			return api.constants.MOD_USER;
		}
	};

	/*
	*/

	window.api = api;
})();