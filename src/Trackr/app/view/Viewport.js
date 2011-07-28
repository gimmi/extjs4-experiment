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
				xtype: 'panel',
				padding: 10,
				title: 'Tasks',
				layout: {
					type: 'vbox',
					align: 'stretch'
				},
				items: [{
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
					xtype: 'tasklist'
				}]
			}, {
				xtype: 'panel',
				title: 'Other'
			}]
		}];

		this.callParent(arguments);
	}
});