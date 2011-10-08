Ext.define('Trackr.app.Main', {
	extend: 'Ext.app.Application',

	requires: [
		'Trackr.controller.TaskList',
		'Trackr.controller.TaskEdit',
		'Trackr.controller.Main',
		'Trackr.view.main.Viewport'
	],

	controllers: [
		'TaskList',
		'TaskEdit',
		'Main'
	],

	launch: function() {
		Ext.widget('mainviewport');
	}
});