using System;
using System.Configuration;
using System.Web.UI;

namespace Trackr
{
	public partial class Default : Page
	{
		public bool IsDevelopmentEnvironment
		{
			get { return Convert.ToBoolean(ConfigurationSettings.AppSettings["DevelopmentEnvironment"]); }
		}

		public string PageName
		{
			get { return Request.QueryString.Get("page") ?? "login"; }
		}

		public string AppCodeFile
		{
			get { return string.Format("{0}{1}.js", PageName, IsDevelopmentEnvironment ? "" : "-all"); }
		}

		public string ExtCodeFile
		{
			get { return string.Format("ext{0}.js", IsDevelopmentEnvironment ? "-dev" : "-all"); }
		}
	}
}