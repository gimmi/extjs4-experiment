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