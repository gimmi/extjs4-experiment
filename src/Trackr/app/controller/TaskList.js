Ext.define('Trackr.controller.TaskList', {
	extend: 'Ext.app.Controller',

	models: [
		'Task',
		'Comment',
		'TaskInfo'
	],

	views: [
		'tasklist.List',
		'tasklist.Panel'
	],

	init: function () {
		this.control({
			'tasklistlist': {
				render: this.onTaskListRender,
				itemdblclick: this.editTask
			},
			'tasklistpanel #searchButton': {
				click: this.searchButtonClick
			}
		});
	},

	onTaskListRender: function (sender) {
		sender.getStore().load();
	},

	editTask: function (grid, record) {
		this.application.fireEvent('trackr-taskselected', record.getId());
	},

	searchButtonClick: function (sender) {
		var filter = sender.up('tasklistpanel').down('#searchText').getValue(); // See http://www.sencha.com/forum/showthread.php?142058
		sender.up('tasklistpanel').down('tasklistlist').getStore().filter('filter', filter);
	}
});