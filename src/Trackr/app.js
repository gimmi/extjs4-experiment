Ext.require('Ext.direct.Manager');

Ext.onReady(function () {
	Ext.direct.Manager.addProvider(Trackr.server.REMOTING_API);

	Ext.create('Ext.app.Application', {
		name: 'Trackr',
		autoCreateViewport: true,
		controllers: ['Tasks'],
		launch: function () {
			console.log('app launched');
		}
	});
});
