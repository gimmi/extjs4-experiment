Ext.define('Trackr.store.Tasks', {
	extend: 'Ext.data.Store',
	model: 'Trackr.model.Task',
	// autoLoad: true,
	proxy: {
		type: 'direct',
		batchActions: false,
		api: {
			create: Trackr.server.TaskRepository.create,
			read: Trackr.server.TaskRepository.read,
			update: Trackr.server.TaskRepository.update,
			destroy: Trackr.server.TaskRepository.destroy
		}
	}
});