load('tools/jslint/jslint.js');
var uglifyjs = require('tools/uglifyjs/uglify-js');

var fs = jsmake.Fs;
var utils = jsmake.Utils;
var sys = jsmake.Sys;

var jsApps = [
	{ appclass: 'Trackr.app.Login', file: 'login.js' },
	{ appclass: 'Trackr.app.Main', file: 'main.js' }
];

task('default', 'jsbuild');

task('jsbuild', function () {
	utils.each(jsApps, function (jsApp) {
		sys.createRunner('tools/phantomjs/phantomjs.exe').args('tools/dependencies/dependencies.js')
			.args('src/Trackr', 'extjs', 'ext-all-dev.js', 'Trackr', 'app', jsApp.appclass)
			.run();
		var files = JSON.parse(fs.readFile('dependencies.json'));
		var contents = utils.map(files, function (file) {
			return fs.readFile(fs.combinePaths('src/Trackr', file));
		});
		var content = uglifyjs(contents.join('\n'));
		fs.writeFile(fs.combinePaths('src/Trackr', jsApp.file), content);
	});
});
