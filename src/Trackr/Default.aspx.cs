using System;
using System.Web.UI;

namespace Trackr
{
	public partial class Default : Page
	{
		public bool IsDevelopmentEnvironment
		{
			get { return Convert.ToBoolean(Request.QueryString.Get("debug")); }
		}

		public string PageName
		{
			get { return Request.QueryString.Get("page") ?? "login"; }
		}

		public string AppScriptTag
		{
			get { return IsDevelopmentEnvironment ? "" : string.Format("<script type='text/javascript' src='{0}.js'> </script>", PageName); }
		}

		public string ExtCodeFile
		{
			get { return string.Format("ext{0}.js", IsDevelopmentEnvironment ? "-dev" : ""); }
		}

		protected string MainClass
		{
			get { return string.Format("Trackr.app.{0}", PageName.Substring(0, 1).ToUpperInvariant() + PageName.Substring(1)); }
		}
	}
}