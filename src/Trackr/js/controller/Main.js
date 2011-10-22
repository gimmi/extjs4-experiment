Ext.define('Trackr.controller.Main', {
	extend: 'Ext.app.Controller',

	refs: [
		{ ref: 'mainPanel', selector: 'mainviewport > panel' }
	],

	init: function () {
		this.control({
			'taskeditpanel toolbar #backButton': {
				'click': this.backToList
			}
		});
		this.application.addListener({
			'trackr-taskselected': this.taskSelected,
			scope: this
		});
	},

	onLaunch: function () {
	},
	
	taskSelected: function (taskId) {
		this.getMainPanel().getLayout().setActiveItem(1);
	},

	backToList: function () {
		this.getMainPanel().getLayout().setActiveItem(0);
	}
});