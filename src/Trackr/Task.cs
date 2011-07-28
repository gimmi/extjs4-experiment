using System;
using System.Collections.Generic;

namespace Trackr
{
	public class Task
	{
		public string Id = Guid.NewGuid().ToString("N");
		public int Number;
		public string Title;
		public string Description;
		public string State;
		public IList<Comment> Comments = new List<Comment>();
	}
}