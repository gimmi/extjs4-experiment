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

	init: function() {
		this.control({
			'loginwindow #loginButton': {
				click: this.onLoginButtonClick
			}
		});
	},

	onLaunch: function() {
		if (!Ext.util.Cookies.get("auth")) {
			Ext.widget('loginwindow').show();
		}
	},

	onLoginButtonClick: function() {
		var values = this.getForm().getForm().getValues();
		Trackr.server.LoginController.login(values.username, values.password, values.keep, function(ret, e) {
			if (ret) {
				this.getWindow().close();
			} else {
				Ext.widget('messagebox').alert('Alert', 'Login failed');
			}
		}, this);
	}
});