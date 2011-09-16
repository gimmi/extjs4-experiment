Ext.define('Trackr.view.Viewport', {
	extend: 'Ext.container.Viewport',
	layout: 'fit',
	initComponent: function() {
		this.items = [{
			xtype: 'panel',
			layout: 'card',
			items: [{
				xtype: 'tasklistpanel',
				itemId: 'tasklist',
				border: 0,
				padding: 10
			}, {
				xtype: 'taskeditpanel',
				itemId: 'taskedit',
				border: 0,
				padding: 10
			}],
			dockedItems: [{
				xtype: 'toolbar',
				dock: 'top',
				items: [{
					xtype: 'button',
					text: 'List'
				}, {
					xtype: 'button',
					text: 'Open'
				}]
			}]
		}];

		this.callParent(arguments);
	}
});