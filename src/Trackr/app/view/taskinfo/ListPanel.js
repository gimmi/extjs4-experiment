Ext.define('Trackr.view.taskinfo.ListPanel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.taskinfolistpanel',

	layout: {
		type: 'vbox',
		align: 'stretch'
	},

	initComponent: function() {
		this.items = [{
			flex: 0,
			xtype: 'panel',
			height: 30,
			border: 0,
			layout: {
				type: 'hbox',
				align: 'top'
			},
			items: [{
				flex: 1,
				xtype: 'textfield',
				itemId: 'searchText',
				fieldLabel: 'Search',
				labelWidth: 50
			}, {
				flex: 0,
				xtype: 'button',
				itemId: 'searchButton',
				text: 'Search/refresh',
				margin: '0 0 0 5'
			}]
		}, {
			flex: 1,
			xtype: 'taskinfolist'
		}];

		this.callParent(arguments);
	}
});