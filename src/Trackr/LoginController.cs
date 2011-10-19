namespace Trackr
{
	public class LoginController
	{
		public bool IsAuthenticated()
		{
			return false;
		}

		public bool Login(string username, string password, bool keep)
		{
			return username.Equals("gimmi");
		}
	}
}