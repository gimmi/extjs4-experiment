<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Trackr.Default" %>
<html>
	<head>
		<title>Trackr</title>
		<link rel="stylesheet" type="text/css" href="extjs/resources/css/ext-all.css">
		<script type="text/javascript" src="extjs/<%=ExtCodeFile%>"> </script>
		<script type="text/javascript" src="rpc"> </script>
		<%=AppScriptTag%>
		<script type="text/javascript">
			Ext.Loader.setConfig({ enabled: <%=IsExtLoaderEnabled%> , disableCaching: false });
			Ext.Loader.setPath('Ext', 'extjs/src');
			Ext.Loader.setPath('Trackr', 'js');
			Ext.require('Ext.direct.*');
			Ext.onReady(function() {
				Ext.direct.Manager.addProvider(Server.REMOTING_API);
				Ext.create('Trackr.app.Main', { name: 'Trackr', appFolder: 'js' });
			});
		</script>
	</head>
	<body></body>
</html>