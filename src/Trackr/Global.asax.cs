using System;
using System.Reflection;
using System.Web;
using Autofac;
using ExtDirectHandler;
using ExtDirectHandler.Configuration;

namespace Trackr
{
	public class Global : HttpApplication
	{
		protected void Application_Start(object sender, EventArgs e)
		{
			var builder = new ContainerBuilder();
			builder.RegisterType<TaskRepository>().AsSelf().InstancePerLifetimeScope();
			builder.RegisterType<LoginController>().AsSelf().InstancePerLifetimeScope();
			IContainer container = builder.Build();

			DirectHttpHandler.SetMetadata(new ReflectionConfigurator()
			                              	.SetNamespace("Server")
			                              	.RegisterType<TaskRepository>()
			                              	.RegisterType<LoginController>());

			DirectHttpHandler.SetDirectHandlerInterceptor(delegate(Type type, MethodInfo method, DirectHandlerInvoker invoker) {
				using(var scope = container.BeginLifetimeScope())
				{
					invoker.Invoke(scope.Resolve(type));
				}
			});
		}

		protected void Session_Start(object sender, EventArgs e) {}

		protected void Application_BeginRequest(object sender, EventArgs e) {}

		protected void Application_AuthenticateRequest(object sender, EventArgs e) {}

		protected void Application_Error(object sender, EventArgs e) {}

		protected void Session_End(object sender, EventArgs e) {}

		protected void Application_End(object sender, EventArgs e) {}
	}
}