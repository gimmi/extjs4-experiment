load('tools/jslint/jslint.js');
var uglifyjs = require('tools/uglifyjs/uglify-js');

var fs = jsmake.Fs;
var utils = jsmake.Utils;
var sys = jsmake.Sys;

task('default', 'jsbuild');

task('jsbuild', function () {
	sys.createRunner('tools/phantomjs/phantomjs.exe').args('tools/dependencies/dependencies.js')
		.args('src/Trackr', 'extjs', 'ext-all-dev.js', 'Trackr', 'js', 'Trackr.app.Main')
		.run();
	var files = JSON.parse(fs.readFile('dependencies.json'));
	var contents = utils.map(files, function (file) {
		return fs.readFile(fs.combinePaths('src/Trackr', file));
	});
	var content = uglifyjs(contents.join('\n'));
	fs.writeFile(fs.combinePaths('src/Trackr', 'main.js'), content);
});
