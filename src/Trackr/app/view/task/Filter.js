Ext.define('Trackr.view.task.Filter', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.task.Filter',

	title: 'Task Filters',

	initComponent: function () {
		this.store = Ext.create('Trackr.store.FilterClauses');
		
		this.columns = [
            { header: 'Field', dataIndex: 'field' },
            { header: 'Operator', dataIndex: 'operator' },
            { header: 'Value', dataIndex: 'value' }
        ];

		this.callParent(arguments);
	}
});