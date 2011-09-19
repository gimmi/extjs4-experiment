Ext.define('Trackr.controller.Login', {
	extend: 'Ext.app.Controller',

	views: [
		'login.Window'
	],

	refs: [
		{ ref: 'window', selector: 'loginwindow' },
		{ ref: 'usernameField', selector: 'loginwindow #usernameField' },
		{ ref: 'passwordField', selector: 'loginwindow #passwordField' }
	],

	init: function(app) {
		this.control({
			'loginwindow #loginButton': {
				click: this.onLoginButtonClick
			}
		});

		if (!app.isAuthenticated()) {
			Ext.widget('loginwindow').show();
		}
	},

	onLoginButtonClick: function() {
		var username = this.getUsernameField().getValue();
		var password = this.getPasswordField().getValue();
		Trackr.server.LoginController.login(username, password, function(ret) {
			if (ret) {
				Ext.create('Trackr.util.HttpBasicAuthUtils').setAjaxAuth(username, password);
				this.getWindow().close();
			} else {
				Ext.widget('messagebox').alert('Alert', 'Login failed');
			}
		}, this);
	}
});