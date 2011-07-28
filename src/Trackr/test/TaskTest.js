describe("Tasks", function () {
	var taskStore;

	beforeEach(function () {
		taskStore = Ext.create('Trackr.store.Tasks');
	});

	it('should load nested data from store', function () {
		runs(function () {
			taskStore.load({
				callback: function () {
					this.completed = true;
					this.taskCount = taskStore.getCount();
					var task = taskStore.getAt(0);
					var commentStore = task.comments();
					this.commentCount = commentStore.getCount();
				},
				scope: this
			});
		});

		waitsFor(function () {
			return this.completed;
		}, 'Server call', 1000);

		runs(function () {
			expect(this.taskCount).toEqual(2);
			expect(this.commentCount).toEqual(2);
		});
	});

	it('should save tasks', function () {
		runs(function () {
			taskStore.load({
				callback: function () {
					this.completed = true;
				},
				scope: this
			});
		});

		waitsFor(function () {
			return this.completed;
		}, 'Server call', 1000);

		runs(function () {
			taskStore.getAt(0).set('description', 'changed 1');
			taskStore.getAt(1).set('description', 'changed 2');
			taskStore.sync();
		});
	});
});