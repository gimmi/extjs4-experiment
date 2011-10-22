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

		public string IsExtLoaderEnabled
		{
			get { return IsDevelopmentEnvironment ? "true" : "false"; }
		}

		public string AppScriptTag
		{
			get { return IsDevelopmentEnvironment ? "" : "<script type='text/javascript' src='main.js'> </script>"; }
		}

		public string ExtCodeFile
		{
			get { return string.Format("ext-all{0}.js", IsDevelopmentEnvironment ? "-dev" : ""); }
		}
	}
}