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