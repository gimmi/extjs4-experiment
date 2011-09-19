Ext.Loader.setConfig({
	disableCaching: false
});

Ext.require(['Ext.direct.Manager', 'Ext.util.Cookies']);

Ext.onReady(function () {
	Ext.direct.Manager.addProvider(Trackr.server.REMOTING_API);

	Ext.create('Ext.app.Application', {
		name: 'Trackr',
		autoCreateViewport: true,
		controllers: [
			'TaskList',
			'TaskEdit',
			'Login'
		],

		launch: function () {
		},

		isAuthenticated: function () {
			return !!Ext.util.Cookies.get("auth");
		}
	});
});