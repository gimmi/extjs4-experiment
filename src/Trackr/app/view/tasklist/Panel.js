Ext.define('Trackr.view.tasklist.Panel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.tasklistpanel',

	layout: {
		type: 'vbox',
		align: 'stretch'
	},

	initComponent: function () {
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

		this.dockedItems = [{
			xtype: 'toolbar',
			dock: 'top',
			items: [{
				xtype: 'button',
				text: 'List'
			}, {
				xtype: 'button',
				text: 'Open'
			}]
		}];

		this.callParent(arguments);
	}
});