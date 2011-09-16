using System;
using System.Web;
using ExtDirectHandler;
using ExtDirectHandler.Configuration;

namespace Trackr
{
	public class Global : HttpApplication
	{
		protected void Application_Start(object sender, EventArgs e)
		{
			DirectHttpHandler.SetMetadata(new ReflectionConfigurator()
			                              	.SetNamespace("Trackr.server")
			                              	.RegisterType<TaskRepository>()
											.RegisterType<LoginController>());
		}

		protected void Session_Start(object sender, EventArgs e) {}

		protected void Application_BeginRequest(object sender, EventArgs e) {}

		protected void Application_AuthenticateRequest(object sender, EventArgs e) {}

		protected void Application_Error(object sender, EventArgs e) {}

		protected void Session_End(object sender, EventArgs e) {}

		protected void Application_End(object sender, EventArgs e) {}
	}
}