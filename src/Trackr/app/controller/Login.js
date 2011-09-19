Ext.define('Trackr.controller.Login', {
	extend: 'Ext.app.Controller',

	views: [
		'login.Window'
	],

	refs: [
		{ ref: 'window', selector: 'loginwindow' },
		{ ref: 'form', selector: 'loginwindow form' }
	],

	init: function (app) {
		this.control({
			'loginwindow #loginButton': {
				click: this.onLoginButtonClick
			}
		});

		if (!app.isAuthenticated()) {
			Ext.widget('loginwindow').show();
		}
	},

	onLoginButtonClick: function () {
		var values = this.getForm().getForm().getValues();
		Trackr.server.LoginController.login(values.username, values.password, !!values.keep, function (ret, e) {
			if (ret) {
				this.getWindow().close();
			} else {
				Ext.widget('messagebox').alert('Alert', 'Login failed');
			}
		}, this);
	}
});