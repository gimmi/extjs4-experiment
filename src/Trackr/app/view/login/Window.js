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
			anchor: '100%'
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