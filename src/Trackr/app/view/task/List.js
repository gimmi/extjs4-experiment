Ext.define('Trackr.view.task.List', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.tasklist',

	initComponent: function () {
		this.store = Ext.create('Trackr.store.Tasks');

		this.columns = [
            { header: 'Title', dataIndex: 'title' },
            { header: 'Description', dataIndex: 'description' },
            { header: 'State', dataIndex: 'state' }
        ];

		this.callParent(arguments);
	}
});