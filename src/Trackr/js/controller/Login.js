Ext.define('Trackr.controller.Login', {
	extend: 'Ext.app.Controller',

	views: [
		'login.Window'
	],

	requires: ['Ext.util.Cookies'],

	refs: [
		{ ref: 'window', selector: 'loginwindow' },
		{ ref: 'form', selector: 'loginwindow form' }
	],

	init: function () {
		this.control({
			'loginwindow #loginButton': {
				click: this.onLoginButtonClick
			}
		});
	},

	onLaunch: function () {
		Server.LoginController.isAuthenticated(function (ret) {
			if (!ret) {
				Ext.widget('loginwindow').show();
			}
		});
	},

	onLoginButtonClick: function () {
		var values = this.getForm().getForm().getValues();
		Server.LoginController.login(values.username, values.password, values.keep, function (ret, e) {
			if (ret) {
				this.getWindow().close();
				this.application.fireEvent('trackr-authenticated');
			} else {
				Ext.widget('messagebox').alert('Alert', 'Login failed');
			}
		}, this);
	}
});