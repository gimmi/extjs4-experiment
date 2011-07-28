Ext.Loader.setPath('Trackr', 'app');

Ext.require('Ext.direct.Manager');

Ext.require('Trackr.controller.Tasks');

Ext.onReady(function() {
	Ext.direct.Manager.addProvider(Trackr.server.REMOTING_API);

	jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
	jasmine.getEnv().execute();
});
