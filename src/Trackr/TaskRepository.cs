using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;

namespace Trackr
{
	public class TaskRepository
	{
		private readonly List<Task> _tasks;

		public TaskRepository()
		{
			_tasks = new List<Task>();
			for(int i = 0; i < 1000; i++)
			{
				_tasks.Add(new Task {
					Number = i,
					Title = "Ticket #" + i,
					Description = "Ticket generated @" + DateTime.Now.TimeOfDay.ToString(),
					State = "Closed",
					Comments = new List<Comment> {
						new Comment { User = "Gimmi", Text = "Comment for task #" + i },
						new Comment { User = "Elena", Text = "Comment for task #" + i },
					}
				});
			}
		}

		public IEnumerable<Task> Read()
		{
			return _tasks;
		}

		public void Create(Task ticket)
		{
			Debug.WriteLine("Create");
		}

		public void Destroy(Task ticket)
		{
			Debug.WriteLine("Destroy");
		}

		public object Update(Task ticket)
		{
			Debug.WriteLine("Update");
			return new { Success = true, Records = new[] { ticket } };
		}

		public object GetAllInfo(int start, int limit)
		{
			return new {
				Root = _tasks.Skip(start).Take(limit).Select(t => new { t.Id, t.Number, t.Title, t.Description, t.State }),
				Total = _tasks.Count()
			};
		}
	}
}