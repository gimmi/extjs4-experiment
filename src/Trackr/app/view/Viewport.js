Ext.define('Trackr.view.Viewport', {
	extend: 'Ext.container.Viewport',
	layout: 'fit',
	initComponent: function() {
		this.items = [{
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
		}];

		this.callParent(arguments);
	}
});