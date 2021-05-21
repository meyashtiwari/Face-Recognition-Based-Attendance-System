const { PythonShell } = require('python-shell');
PythonShell.defaultOptions = { scriptPath: '../../../Engine/' };

const pyshell = new PythonShell('test.py');

pyshell.on('message', function (message) {
	console.log(message);
});

pyshell.end(function (err, code, signal) {
	if (err) throw err;
	console.log('The exit code was: ' + code);
	console.log('The exit signal was: ' + signal);
	console.log('finished');
});
