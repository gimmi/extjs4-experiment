using System;

namespace Trackr
{
	public class Comment
	{
		public string Id = Guid.NewGuid().ToString("N");
		public string User;
		public string Text;
	}
}