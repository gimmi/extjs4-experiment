using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;

namespace Trackr
{
	public class TaskRepository
	{
		private readonly Task[] _tasks = new[] {
			new Task {
				Title = "Ticket 1",
				Description = "t1",
				State = "Opened",
				Comments = new List<Comment> {
					new Comment { User = "Gimmi", Text = "Ok" },
					new Comment { User = "Elena", Text = "No!" },
				}
			},
			new Task {
				Title = "Ticket 2",
				Description = "t2",
				State = "Closed",
				Comments = new List<Comment> {
					new Comment { User = "Gimmi", Text = "Ok" },
					new Comment { User = "Elena", Text = "No!" },
				}
			}
		};

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

		public IEnumerable<object> GetAllInfo()
		{
			return _tasks.Select(t => new { t.Id, t.Number, t.Title });
		}
	}
}