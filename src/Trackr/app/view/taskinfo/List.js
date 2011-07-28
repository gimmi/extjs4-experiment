Ext.define('Trackr.view.taskinfo.List', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.taskinfolist',

	initComponent: function () {
		this.store = Ext.create('Trackr.store.TaskInfos');
		
		this.columns = [
            { text: 'Title', dataIndex: 'title' },
			{ text: 'State', dataIndex: 'state' },
            { text: 'Description', dataIndex: 'description', flex: 1 }
        ];

		this.callParent(arguments);
	}
});