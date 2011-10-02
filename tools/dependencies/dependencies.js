var fs = require('fs');

var htmlFile = fs.absolute(phantom.args[0] + "/dependencies.html");
var html = [
	'<html>',
	'	<head>',
	'		<title></title>',
	'		<script type="text/javascript" src="@extpath/@extfile"> </script>',
	'		<script type="text/javascript">',
	'			Ext.Loader.setConfig({ enabled: true });',
	'			Ext.Loader.setPath("Ext", "@extpath/src");',
	'			Ext.Loader.setPath("@appname", "@apppath");',
	'			Ext.require("Ext.direct.Manager");',
	'			Ext.require("@appclass");',
	'		</script>',
	'	</head>',
	'	<body></body>',
	'</html>',
].join('\n')
.replace(/@extpath/g, phantom.args[1])
.replace(/@extfile/g, phantom.args[2])
.replace(/@appname/g, phantom.args[3])
.replace(/@apppath/g, phantom.args[4])
.replace(/@appclass/g, phantom.args[5]);

fs.write(htmlFile, html, "w");

var page = require('webpage').create();
page.onConsoleMessage = function (msg) { 
	console.log('Page log: ' + msg);
	phantom.exit(1);
};
page.onLoadFinished = function (status) {
	if (status !== 'success') {
        console.log("Unable to access network");
		phantom.exit(1);
	}
	page.evaluate(function () { 
		Ext.onReady(function () { 
			window.PAGE_LOAD_COMPLETED = true;
		});
	});
	var intervalId = setInterval(function () {
		if (!page.evaluate(function () {  return window.PAGE_LOAD_COMPLETED; })) {
			return;
		}
		clearInterval(intervalId);
		var files = page.evaluate(function () {
			return Ext.Array.map(Ext.Loader.history, function (item) {
				return Ext.Loader.getPath(item);
			});
		});
		console.log(files.length + ' dependencies found');
		fs.write('dependencies.json', JSON.stringify(files, undefined, '\t'), "w");
		phantom.exit(0);
	}, 500);
};

page.open('file:///' + htmlFile);
