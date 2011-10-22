Ext.define('Trackr.app.Main', {
	extend: 'Ext.app.Application',

	requires: [
		'Trackr.controller.Login', // Workaround for http://www.sencha.com/forum/showthread.php?149299
		'Trackr.controller.TaskList',
		'Trackr.controller.TaskEdit',
		'Trackr.controller.Main',
		'Trackr.view.main.Viewport'
	],

	controllers: [
		'Login',
		'TaskList',
		'TaskEdit',
		'Main'
	],

	launch: function () {
		this.on({
			'trackr-authenticated': this.onAuthenticated,
			scope: this
		});
	},

	onAuthenticated: function () {
		Ext.widget('mainviewport');
	}
});