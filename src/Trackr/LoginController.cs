namespace Trackr
{
	public class LoginController
	{
		public bool Login(string username, string password)
		{
			return username.Equals("gimmi");
		}
	}
}