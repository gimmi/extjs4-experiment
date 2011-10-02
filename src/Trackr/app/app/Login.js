Ext.define('Trackr.app.Login', {
	extend: 'Ext.app.Application',

	requires: [
		'Trackr.controller.Login' // Workaround for http://www.sencha.com/forum/showthread.php?149299
	],

	controllers: [
		'Login'
	],

	launch: function () {
		console.log('app launched');
	}
});