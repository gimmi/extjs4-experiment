<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Trackr.Default" %>
<html>
	<head>
		<title>Trackr</title>
		<link rel="stylesheet" type="text/css" href="extjs/resources/css/ext-all.css">
		<script type="text/javascript" src="extjs/<%=ExtCodeFile%>"> </script>
		<script type="text/javascript" src="rpc"> </script>
		<script type="text/javascript">
			Ext.Loader.setConfig({ enabled: true, disableCaching: false });
			Ext.Loader.setPath('Ext', 'extjs/src');
			Ext.Loader.setPath('Trackr', 'app');
		</script>
		<%=AppScriptTag%>
		<script type="text/javascript">
			Ext.syncRequire('Ext.direct.Manager');
			Ext.direct.Manager.addProvider(Trackr.server.REMOTING_API);
			Ext.create('<%=MainClass%>', { name: 'Trackr', appFolder: 'app' });
		</script>
	</head>
	<body></body>
</html>