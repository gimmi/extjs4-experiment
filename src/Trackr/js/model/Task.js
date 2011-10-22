Ext.define('Trackr.model.Task', {
	extend: 'Ext.data.Model',
	requires: [ 'Trackr.data.proxy.Direct' ],
	fields: ['id', 'number', 'title', 'description', 'state'],
	hasMany: { model: 'Trackr.model.Comment', name: 'comments' },
	proxy: {
		type: 'direct2',
		// batchActions: false,
		paramOrder: ['id'], // Seems that are considered only for read operation
		api: {
			create: 'Server.TaskRepository.create',
			read: 'Server.TaskRepository.read',
			update: 'Server.TaskRepository.update',
			destroy: 'Server.TaskRepository.destroy'
		}
	}
});