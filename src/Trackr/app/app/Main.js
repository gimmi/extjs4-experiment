Ext.define('Trackr.app.Main', {
	extend: 'Ext.app.Application',

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