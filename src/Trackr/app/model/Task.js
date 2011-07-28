Ext.define('Trackr.model.Task', {
	extend: 'Ext.data.Model',
	fields: ['id', 'number', 'title', 'description', 'state'],
	hasMany: { model: 'Trackr.model.Comment', name: 'comments' }
});