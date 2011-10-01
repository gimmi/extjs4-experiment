load('tools/jslint/jslint.js');
var uglifyjs = require('tools/uglifyjs/uglify-js');

var fs = jsmake.Fs;
var utils = jsmake.utils;

task('default', 'buildjs');

task('buildjs', function () {
	var appFiles = jsmake.Fs.createScanner('src/Trackr/app')
		.include('**/*.js')
		.scan();
	var appContent = jsmake.Utils.map(appFiles, function (appFile) {
		return fs.readFile(appFile);
	}).join('\n');

	var mainFiles = jsmake.Fs.createScanner('src/Trackr')
		.include('*-dev.js')
		.scan();
	jsmake.Utils.each(mainFiles, function (mainFile) {
		var content = fs.readFile(mainFile);
		content = [ appContent, content ].join('\n'); //uglifyjs([ appContent, content ].join('\n'));
		fs.writeFile(mainFile.replace('-dev.js', '.js'), content);
	});
});

task('jsdeps', function () {
	jsmake.Sys.createRunner('tools/phantomjs/phantomjs.exe').args('tools/dependencies/dependencies.js')
		.args('src/Trackr')
		.args('extjs')
		.args('ext-dev.js')
		.args('Trackr')
		.args('app')
		.args('Ext.app.Application')
		.run();
});
