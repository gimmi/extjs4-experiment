Ext.define('Trackr.view.tasklist.List', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.tasklistlist',
	
	requires: [ 'Trackr.store.TaskInfos' ],
	
	columns: [
		{ text: 'Title', dataIndex: 'title' },
		{ text: 'State', dataIndex: 'state' },
		{ text: 'Description', dataIndex: 'description', flex: 1 }
	],
	
	selModel: {
		selType: 'checkboxmodel',
		mode: 'MULTI'
	},

	dockedItems: [{
		xtype: 'toolbar',
		dock: 'top',
		items: [{
			xtype: 'button',
			itemId: 'open-button',
			text: 'Open',
			disabled: true
		}]
	}],

	initComponent: function () {
		this.store = Ext.create('Trackr.store.TaskInfos');

		this.dockedItems.push({
			dock: 'bottom',
			xtype: 'pagingtoolbar',
			store: this.store,
			displayInfo: true
		});
		
		this.callParent(arguments);
	}
});