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

	refs: [
		{ ref: 'listPanel', selector: 'tasklistpanel' },
		{ ref: 'openButton', selector: 'tasklistpanel #open-button' }
	],

	init: function () {
		this.control({
			'tasklistlist': {
				render: this.onTaskListRender,
				itemdblclick: this.editTask,
				itemcontextmenu: this.taskContextMenu,
				selectionchange: this.onSelectionChange
			},
			'tasklistpanel #searchButton': {
				click: this.searchButtonClick
			},
			'tasklistpanel #open-button': {
				click: this.editTask
			}
		});
	},

	onTaskListRender: function (sender) {
		sender.getStore().load();
	},

	editTask: function () {
		var record = this.getListPanel().down('tasklistlist').getSelectionModel().getLastSelected();
		this.application.fireEvent('trackr-taskselected', record.getId());
	},

	searchButtonClick: function (sender) {
		var filter = sender.up('tasklistpanel').down('#searchText').getValue(); // See http://www.sencha.com/forum/showthread.php?142058
		sender.up('tasklistpanel').down('tasklistlist').getStore().filter('filter', filter);
	},

	taskContextMenu: function (sender, record, item, index, e, eOpts) {
		var menu = Ext.create('Ext.menu.Menu', {
			items: [{
				text: 'Edit'
			}]
		});
		menu.showAt(e.getXY());
		e.stopEvent();
	},

	onSelectionChange: function (selModel, records) {
		this.getOpenButton().setDisabled(records.length !== 1);
	}
});