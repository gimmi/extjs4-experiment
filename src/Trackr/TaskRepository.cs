﻿using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using Newtonsoft.Json.Linq;

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
					Id = i.ToString(),
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

		public Task Read(int id)
		{
			return _tasks.Where(t => t.Id == id.ToString()).Single();
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

		public object GetAllInfo(int start, int limit, SortInfo[] sort, FilterInfo[] filter)
		{
			return new {
				Root = _tasks.Skip(start).Take(limit).Select(t => new { t.Id, t.Number, t.Title, t.Description, t.State }),
				Total = _tasks.Count()
			};
		}

		#region Nested type: FilterInfo

		public class FilterInfo
		{
			public string Property;
			public string Value;
		}

		#endregion

		#region Nested type: SortInfo

		public class SortInfo
		{
			public string Property;
			public string Direction;
		}

		#endregion
	}
}