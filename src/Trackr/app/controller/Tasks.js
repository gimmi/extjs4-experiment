Ext.define('Trackr.controller.Tasks', {
	extend: 'Ext.app.Controller',

	models: [
		'Task',
		'Comment',
		'TaskInfo'
	],

	views: [
		'taskinfo.List',
		'taskinfo.ListPanel'
	],

	init: function() {
		this.control({
			'taskinfolist': {
				render: this.onTaskListRender,
				itemdblclick: this.editTask
			}
		});
	},

	onTaskListRender: function(sender) {
		sender.getStore().load();
	},

	editTask: function(grid, record) {
		alert('TODO');
	}
});