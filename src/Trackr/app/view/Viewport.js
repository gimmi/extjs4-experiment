Ext.define('Trackr.view.Viewport', {
	extend: 'Ext.container.Viewport',
	layout: 'fit',
	initComponent: function() {
		this.items = [{
			xtype: 'tabpanel',
			items: [{
				xtype: 'panel',
				title: 'Welcome'
			}, {
				xtype: 'taskinfolistpanel',
				padding: 10,
				title: 'Tasks'
			}, {
				xtype: 'panel',
				title: 'Other'
			}]
		}];

		this.callParent(arguments);
	}
});