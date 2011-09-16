Ext.define('Trackr.controller.TaskEdit', {
	extend: 'Ext.app.Controller',

	models: [
		'Task',
		'Comment'
	],

	views: [
		'taskedit.Panel'
	],

	init: function () {
		this.control({
			'taskeditpanel': {
				render: this.onTaskEditRender
			},
			'taskeditpanel #saveButton': {
				click: this.onSaveButtonClick
			}
		});
	},

	onTaskEditRender: function (sender) {
		Trackr.model.Task.load(1, {
			success: function (record) {
				sender.loadRecord(record);
			},
			scope: this
		});
	},

	onSaveButtonClick: function () {
		alert('TODO');
	}
});
