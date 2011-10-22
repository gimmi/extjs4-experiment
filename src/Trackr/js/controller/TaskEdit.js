Ext.define('Trackr.controller.TaskEdit', {
	extend: 'Ext.app.Controller',

	models: [
		'Task',
		'Comment'
	],

	views: [
		'taskedit.Panel'
	],

	refs: [
		{ ref: 'editPanel', selector: 'taskeditpanel' }
	],

	init: function () {
		this.control({
			'taskeditpanel #saveButton': {
				click: this.onSaveButtonClick
			}
		});
		this.application.addListener({
			'trackr-taskselected': this.taskSelected,
			scope: this
		});
	},

	taskSelected: function (taskId) {
		Trackr.model.Task.load(taskId, {
			success: function (record) {
				this.getEditPanel().loadRecord(record);
			},
			scope: this
		});
	},

	onSaveButtonClick: function () {
		alert('TODO');
	}
});
