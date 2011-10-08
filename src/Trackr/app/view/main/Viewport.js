Ext.define('Trackr.view.main.Viewport', {
	extend: 'Ext.container.Viewport',
	alias: 'widget.mainviewport',

	layout: 'fit',
	items: [{
		xtype: 'panel',
		layout: 'card',
		items: [{
			xtype: 'tasklistpanel',
			itemId: 'tasklist',
			border: 0
		}, {
			xtype: 'taskeditpanel',
			itemId: 'taskedit',
			border: 0
		}]
	}]
});