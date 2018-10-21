(function() {
	$(document).ready(function() {
		init_api();

		if(api.auth.checkLevel() < api.constants.ADMINISTRATOR) {
			window.location = "/";
			return;
		} else {
			alert("Logged in!");
		}
		function init_user_panel() {
		};
	});
})();