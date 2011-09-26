Ext.onReady(function() {
	Ext.direct.Manager.addListener('exception', function(e) {
		Ext.Error.raise(Ext.String.format('{0}.{1} - {2}', e.action, e.method, e.message));
	}, this);

	Ext.create('Ext.app.Application', {
		name: 'Trackr',

		controllers: [
			'TaskList',
			'TaskEdit'
		],
		launch: function() {
			Ext.widget('viewport', {
				layout: 'fit',
				items: [{
					xtype: 'panel',
					layout: 'card',
					items: [{
						xtype: 'taskeditpanel',
						itemId: 'taskedit',
						border: 0
					}, {
						xtype: 'tasklistpanel',
						itemId: 'tasklist',
						border: 0,
						padding: 10
					}]
				}]
			});
		}
	});
});