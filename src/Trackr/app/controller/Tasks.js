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

	init: function () {
		this.control({
			'taskinfolist': {
				render: this.onTaskListRender,
				itemdblclick: this.editTask
			},
			'taskinfolistpanel #searchButton': {
				click: this.searchButtonClick
			}
		});
	},

	onTaskListRender: function (sender) {
		sender.getStore().load();
	},

	editTask: function (grid, record) {
		alert('TODO');
	},

	searchButtonClick: function (sender) {
		var filter = sender.up('taskinfolistpanel').down('#searchText').getValue(); // See http://www.sencha.com/forum/showthread.php?142058
		sender.up('taskinfolistpanel').down('taskinfolist').getStore().filter('filter', filter);
	}
});