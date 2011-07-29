Ext.define('Trackr.view.tasklist.List', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.tasklistlist',

	initComponent: function () {
		this.store = Ext.create('Trackr.store.TaskInfos');

		this.columns = [
			{ text: 'Title', dataIndex: 'title' },
			{ text: 'State', dataIndex: 'state' },
			{ text: 'Description', dataIndex: 'description', flex: 1 }
		];

		this.dockedItems = [{
			dock: 'bottom',
			xtype: 'pagingtoolbar',
			store: this.store,
			displayInfo: true
		}];
		
		this.callParent(arguments);
	}
});