<script context="module">
	let {PythonShell} = require('python-shell');
	import swal from 'sweetalert';
</script>
<script>
	function handleReTrain() {
		let options = {
			mode: 'text',
			pythonPath: '../engine/env/bin/python',
			pythonOptions: ['-u'],
			scriptPath: '../engine'
		};
		PythonShell.run('reTrain.py', options, function (err, results) {
			if (err) throw err;
			if(results == 'success') {
				swal('Successful', 'The model has been successfully trained!', 'success');
			}
			else {
				swal("Failed", "There was a problem in training model, make sure the training images are present in training folder.", 'error');
			}
		});
	}
</script>

<header class="toolbar toolbar-header">
	<h1 class="title">
		Face Recognition based Attendance Management System
	</h1>
	<div class="toolbar-actions">
		<button on:click={handleReTrain} id="train" class="btn btn-default pull-right">
			<span class="icon icon-retweet icon-text"></span>
			Retrain Model
		</button>
	</div>
</header>
