Ext.define('Trackr.controller.Tasks', {
	extend: 'Ext.app.Controller',

	models: ['Task', 'Comment', 'TaskInfo'],

	views: [
		'task.List',
		'task.Filter',
		'taskinfo.List'
	],

	init: function () {
		this.control({
			'tasklist': {
				render: this.onTaskListRender,
				itemdblclick: this.editTask
			}
		});
	},

	onTaskListRender: function (sender) {
		sender.getStore().load();
	},

	editTask: function (grid, record) {
		alert('TODO');
	}
});