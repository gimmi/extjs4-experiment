// Workaround for http://www.sencha.com/forum/showthread.php?149305
Ext.define('Trackr.data.proxy.Direct', {
	extend: 'Ext.data.proxy.Direct',

	alias: 'proxy.direct2',

	// @override
	doRequest: function () {
		Ext.Object.each(this.api, function (key, value) {
			this.api[key] = Ext.isString(value) ? eval(value) : value;
		}, this);

		this.directFn = Ext.isString(this.directFn) ? eval(this.directFn) : this.directFn;

		this.callParent(arguments);
	}
});