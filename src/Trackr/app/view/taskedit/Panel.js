Ext.define('Trackr.view.taskedit.Panel', {
	extend: 'Ext.form.Panel',
	alias: 'widget.taskeditpanel',

	layout: {
		type: 'vbox',
		align: 'stretch'
	},

	bodyPadding: 10,

	dockedItems: [{
		xtype: 'toolbar',
		dock: 'top',
		items: [{
			xtype: 'button',
			text: 'Back to list',
			itemId: 'backButton'
		}, {
			xtype: 'button',
			text: 'Save',
			itemId: 'saveButton'
		}]
	}],

	constructor: function (config) {
		// Workaround for http://www.sencha.com/forum/showthread.php?149305
		config.api = {
			load: Trackr.server.TaskRepository.load,
			submit: Trackr.server.TaskRepository.submit
		};

		this.callParent(arguments);
	},

	initComponent: function () {
		this.items = [{
			flex: 0,
			xtype: 'panel',
			height: 100,
			border: 0,
			layout: 'anchor',
			items: [{
				xtype: 'numberfield',
				name: 'number',
				fieldLabel: 'Number'
			}, {
				xtype: 'textfield',
				name: 'title',
				fieldLabel: 'Title'
			}]
		}, {
			flex: 1,
			xtype: 'tabpanel',
			plain: true,
			items: [{
				xtype: 'panel',
				title: 'Description',
				layout: 'fit',
				padding: 10,
				items: [{
					xtype: 'textareafield',
					name: 'description'
				}]
			}, {
				xtype: 'panel',
				title: 'Comments'
			}]
		}];

		this.callParent(arguments);
	}
});