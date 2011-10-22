Ext.define('Trackr.view.tasklist.Panel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.tasklistpanel',

	layout: {
		type: 'vbox',
		align: 'stretch'
	},

	bodyPadding: 10,

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
	}],
	
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
			xtype: 'tasklistlist'
		}];

		this.callParent(arguments);
	}
});