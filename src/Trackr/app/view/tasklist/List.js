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

	initComponent: function () {
		this.store = Ext.create('Trackr.store.TaskInfos');

		this.dockedItems = [{
			dock: 'bottom',
			xtype: 'pagingtoolbar',
			store: this.store,
			displayInfo: true
		}];
		
		this.callParent(arguments);
	}
});