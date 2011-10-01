Ext.define('Trackr.controller.Login', {
	extend: 'Ext.app.Controller',

	views: [
		'login.Window'
	],

	requires: ['Ext.util.Cookies'],

	refs: [
		{ ref: 'window', selector: 'loginwindow' },
		{ ref: 'form', selector: 'loginwindow form' }
	],

	init: function() {
		this.control({
			'loginwindow #loginButton': {
				click: this.onLoginButtonClick
			}
		});
	},

	onLaunch: function() {
		if (!Ext.util.Cookies.get("auth")) {
			Ext.widget('loginwindow').show();
		}
	},

	onLoginButtonClick: function() {
		var values = this.getForm().getForm().getValues();
		Trackr.server.LoginController.login(values.username, values.password, values.keep, function(ret, e) {
			if (ret) {
				this.getWindow().close();
			} else {
				Ext.widget('messagebox').alert('Alert', 'Login failed');
			}
		}, this);
	}
});
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
		alert('TODO');
	},

	searchButtonClick: function (sender) {
		var filter = sender.up('tasklistpanel').down('#searchText').getValue(); // See http://www.sencha.com/forum/showthread.php?142058
		sender.up('tasklistpanel').down('tasklistlist').getStore().filter('filter', filter);
	}
});
Ext.define('Trackr.model.Comment', {
	extend: 'Ext.data.Model',
	fields: ['id', 'user', 'text'],
	belongsTo: { model: 'Trackr.model.Task', name: 'task' }
});
Ext.define('Trackr.model.Task', {
	extend: 'Ext.data.Model',
	fields: ['id', 'number', 'title', 'description', 'state'],
	hasMany: { model: 'Trackr.model.Comment', name: 'comments' },
	proxy: {
		type: 'direct',
		// batchActions: false,
		paramOrder: ['id'], // Seems that are considered only for read operation
		api: {
			create: Trackr.server.TaskRepository.create,
			read: Trackr.server.TaskRepository.read,
			update: Trackr.server.TaskRepository.update,
			destroy: Trackr.server.TaskRepository.destroy
		}
	}
});
Ext.define('Trackr.model.TaskInfo', {
	extend: 'Ext.data.Model',
	fields: [ 'id', 'number', 'title', 'description', 'state' ]
});
Ext.define('Trackr.store.TaskInfos', {
	extend: 'Ext.data.Store',
	model: 'Trackr.model.TaskInfo',
	pageSize: 50,
	remoteSort: true,
	remoteFilter: true,
	proxy: {
		type: 'direct',
		paramOrder: ['start', 'limit', 'sort', 'filter'],
		api: {
			read: Trackr.server.TaskRepository.getAllInfo
		},
		reader: {
			type: 'json',
			root: 'root'
		}
	}
});
Ext.define('Trackr.store.Tasks', {
	extend: 'Ext.data.Store',
	model: 'Trackr.model.Task'
});
Ext.define('Trackr.util.HttpBasicAuthUtils', {
	setAjaxAuth: function (username, password) {
		Ext.Ajax.defaultHeaders = Ext.Ajax.defaultHeaders || {};
		Ext.Ajax.defaultHeaders['Authorization'] = 'Basic ' + this.base64_encode(username + ':' + password);
	},

	base64_encode: function (data) {
		// Encodes string using MIME base64 algorithm  
		// 
		// version: 1103.1210
		// discuss at: http://phpjs.org/functions/base64_encode
		// +   original by: Tyler Akins (http://rumkin.com)
		// +   improved by: Bayron Guevara
		// +   improved by: Thunder.m
		// +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
		// +   bugfixed by: Pellentesque Malesuada
		// +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
		// -    depends on: utf8_encode
		// *     example 1: base64_encode('Kevin van Zonneveld');
		// *     returns 1: 'S2V2aW4gdmFuIFpvbm5ldmVsZA=='
		// mozilla has this native
		// - but breaks in 2.0.0.12!
		//if (typeof this.window['atob'] == 'function') {
		//    return atob(data);
		//}
		var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
		var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
		    ac = 0,
		    enc = "",
		    tmp_arr = [];

		if (!data) {
			return data;
		}

		data = this.utf8_encode(data + '');

		do { // pack three octets into four hexets
			o1 = data.charCodeAt(i++);
			o2 = data.charCodeAt(i++);
			o3 = data.charCodeAt(i++);

			bits = o1 << 16 | o2 << 8 | o3;

			h1 = bits >> 18 & 0x3f;
			h2 = bits >> 12 & 0x3f;
			h3 = bits >> 6 & 0x3f;
			h4 = bits & 0x3f;

			// use hexets to index into b64, and append result to encoded string
			tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
		} while (i < data.length);

		enc = tmp_arr.join('');

		switch (data.length % 3) {
			case 1:
				enc = enc.slice(0, -2) + '==';
				break;
			case 2:
				enc = enc.slice(0, -1) + '=';
				break;
		}

		return enc;
	},

	utf8_encode: function (argString) {
		// Encodes an ISO-8859-1 string to UTF-8  
		// 
		// version: 1103.1210
		// discuss at: http://phpjs.org/functions/utf8_encode
		// +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
		// +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
		// +   improved by: sowberry
		// +    tweaked by: Jack
		// +   bugfixed by: Onno Marsman
		// +   improved by: Yves Sucaet
		// +   bugfixed by: Onno Marsman
		// +   bugfixed by: Ulrich
		// *     example 1: utf8_encode('Kevin van Zonneveld');
		// *     returns 1: 'Kevin van Zonneveld'
		var string = (argString + ''); // .replace(/\r\n/g, "\n").replace(/\r/g, "\n");
		var utftext = "",
		    start, end, stringl = 0;

		start = end = 0;
		stringl = string.length;
		for (var n = 0; n < stringl; n++) {
			var c1 = string.charCodeAt(n);
			var enc = null;

			if (c1 < 128) {
				end++;
			} else if (c1 > 127 && c1 < 2048) {
				enc = String.fromCharCode((c1 >> 6) | 192) + String.fromCharCode((c1 & 63) | 128);
			} else {
				enc = String.fromCharCode((c1 >> 12) | 224) + String.fromCharCode(((c1 >> 6) & 63) | 128) + String.fromCharCode((c1 & 63) | 128);
			}
			if (enc !== null) {
				if (end > start) {
					utftext += string.slice(start, end);
				}
				utftext += enc;
				start = end = n + 1;
			}
		}

		if (end > start) {
			utftext += string.slice(start, stringl);
		}

		return utftext;
	}
});
Ext.define('Trackr.view.login.Window', {
	extend: 'Ext.window.Window',
	alias: 'widget.loginwindow',

	height: 150,
	width: 300,
	layout: {
		type: 'fit'
	},
	closable: false,
	title: 'Login',
	modal: true,
	items: [{
		xtype: 'form',
		border: 0,
		bodyPadding: 10,
		items: [{
			xtype: 'textfield',
			name: 'username',
			fieldLabel: 'User Name',
			labelWidth: 70,
			anchor: '100%'
		}, {
			xtype: 'textfield',
			name: 'password',
			inputType: 'password',
			fieldLabel: 'Password',
			labelWidth: 70,
			anchor: '100%'
		}, {
			xtype: 'checkboxfield',
			name: 'keep',
			boxLabel: 'Keep me signed in',
			anchor: '100%',
			inputValue: true,
			uncheckedValue: false
		}],
		dockedItems: [{
			xtype: 'toolbar',
			dock: 'bottom',
			items: [{
				xtype: 'component',
				flex: 1
			}, {
				xtype: 'button',
				itemId: 'loginButton',
				text: 'Login'
			}]
		}]
	}]
});
Ext.define('Trackr.view.taskedit.Panel', {
	extend: 'Ext.form.Panel',
	alias: 'widget.taskeditpanel',
	
	layout: {
		type: 'vbox',
		align: 'stretch'
	},

	bodyPadding: 10,

	api: {
		load: Trackr.server.TaskRepository.load,
		submit: Trackr.server.TaskRepository.submit
	},
	
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
	
	initComponent: function() {
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
Ext.define('Trackr.view.tasklist.List', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.tasklistlist',

	initComponent: function () {
		this.store = Ext.create('Trackr.store.TaskInfos');

		this.columns = [
			{ text: 'Title', dataIndex: 'title' },
			{ text: 'State', dataIndex: 'state' },
			{ text: 'Description', dataIndex: 'description', flex: 1 }
		];

		this.dockedItems = [{
			dock: 'bottom',
			xtype: 'pagingtoolbar',
			store: this.store,
			displayInfo: true
		}];
		
		this.callParent(arguments);
	}
});
Ext.define('Trackr.view.tasklist.Panel', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.tasklistpanel',

	layout: {
		type: 'vbox',
		align: 'stretch'
	},

	initComponent: function () {
		this.items = [{
			flex: 0,
			xtype: 'panel',
			height: 30,
			border: 0,
			layout: {
				type: 'hbox',
				align: 'top'
			},
			items: [{
				flex: 1,
				xtype: 'textfield',
				itemId: 'searchText',
				fieldLabel: 'Search',
				labelWidth: 50
			}, {
				flex: 0,
				xtype: 'button',
				itemId: 'searchButton',
				text: 'Search/refresh',
				margin: '0 0 0 5'
			}]
		}, {
			flex: 1,
			xtype: 'tasklistlist'
		}];

		this.dockedItems = [{
			xtype: 'toolbar',
			dock: 'top',
			items: [{
				xtype: 'button',
				text: 'List'
			}, {
				xtype: 'button',
				text: 'Open'
			}]
		}];

		this.callParent(arguments);
	}
});
Ext.onReady(function() {
	Ext.direct.Manager.addListener('exception', function(e) {
		Ext.Error.raise(Ext.String.format('{0}.{1} - {2}', e.action, e.method, e.message));
	}, this);

	Ext.create('Ext.app.Application', {
		name: 'Trackr',

		controllers: [
			'TaskList',
			'TaskEdit'
		],
		launch: function() {
			Ext.widget('viewport', {
				layout: 'fit',
				items: [{
					xtype: 'panel',
					layout: 'card',
					items: [{
						xtype: 'taskeditpanel',
						itemId: 'taskedit',
						border: 0
					}, {
						xtype: 'tasklistpanel',
						itemId: 'tasklist',
						border: 0,
						padding: 10
					}]
				}]
			});
		}
	});
});