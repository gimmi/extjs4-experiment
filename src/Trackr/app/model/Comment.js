Ext.define('Trackr.model.Comment', {
	extend: 'Ext.data.Model',
	fields: ['id', 'user', 'text'],
	belongsTo: { model: 'Trackr.model.Task', name: 'task' }
});