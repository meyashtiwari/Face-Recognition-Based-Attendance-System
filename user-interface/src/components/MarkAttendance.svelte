<script context="module">
	let {PythonShell} = require('python-shell');
	import swal from 'sweetalert';
</script>
<script>
    let clockElement = new Date().toString();

    function clock() {
        clockElement = new Date().toString();
    }
    setInterval(clock, 1000);

    
    function handleAttendance() {
		let options = {
			mode: 'text',
			pythonPath: '../engine/env/bin/python',
			pythonOptions: ['-u'],
			scriptPath: '../engine'
		};
		PythonShell.run('markAttendance.py', options, function (err, results) {
			if (err) throw err;
			if(results == 'success') {
				swal('Successful', 'Attendance has been recorded successfully!', 'success');
			}
			else {
				swal("Failed", "There was a problem in marking attendance. Please check the console for errors.", 'error');
			}
		});
	}
</script>

<div id="markattendance">
	<h1 class="title" id="date">{clockElement}</h1>
	<button on:click={handleAttendance} id="attendancebutton" class="btn btn-large btn-positive">
		Mark Attendance
	</button>
		<p class="title">Note: Wait for the process to start camera, it might take a few seconds.</p>
		<p class="title">Press 'q' to finish the attendance marking.</p>
</div>

<style>
	#markattendance {
		text-align: center;
	}

	#attendancebutton {
		margin-top: 3em;
		margin-bottom: 3em;
	}
</style>