Ext.define('Trackr.view.taskinfo.List', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.taskinfo.List',

	initComponent: function () {
		this.store = Ext.create('Trackr.store.TaskInfos');
		
		this.columns = [
            { header: 'Title', dataIndex: 'title' }
        ];

		this.callParent(arguments);
	}
});