Ext.Loader.setConfig({
	disableCaching: false
});

Ext.require('Ext.direct.Manager');

Ext.onReady(function () {
	Ext.direct.Manager.addProvider(Trackr.server.REMOTING_API);
	Ext.direct.Manager.addListener('exception', function (e) {
		Ext.Error.raise(Ext.String.format('{0}.{1} - {2}', e.action, e.method, e.message));
	}, this);

	Ext.create('Ext.app.Application', {
		name: 'Trackr',
		autoCreateViewport: true,
		controllers: [
			'TaskList',
			'TaskEdit',
			'Login'
		],

		launch: function () {
		}
	});
});