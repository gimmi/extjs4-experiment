Ext.define('Trackr.store.TaskInfos', {
	extend: 'Ext.data.Store',
	model: 'Trackr.model.TaskInfo',
	autoLoad: true,
	proxy: {
		type: 'direct',
		api: {
			read: Trackr.server.TaskRepository.getAllInfo
		}
	}
});