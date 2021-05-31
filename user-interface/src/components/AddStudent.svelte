<script context="module">
	let {PythonShell} = require('python-shell');
	import swal from 'sweetalert';
</script>
<script>
	let Id, Name;
	function handleSubmit() {
		let StudentId = document.getElementById('ID').value;
		let StudentName = document.getElementById('Name').value;
		let options = {
			mode: 'text',
			pythonPath: '../engine/env/bin/python',
			pythonOptions: ['-u'],
			scriptPath: '../engine',
			args: [StudentId, StudentName]
		};
		PythonShell.run('addStudent.py', options, function (err, results) {
			if (err) throw err;
			if(results == 'success') {
				swal('Successful', 'New Student has been added successfully!', 'success');
			}
			else {
				swal("Failed", "There was a problem in adding new student. Please check the console for errors.", 'error');
			}
		});
		Id = Name = '';
	}
</script>

<form on:submit|preventDefault={handleSubmit}>
	<div class="form-group">
		<label for="student-id"> Student ID </label>
		<input
			id="ID"
			type="number"
			class="form-control"
			placeholder="ID"
			required
			bind:value={Id}
		/>
	</div>
	<div class="form-group">
		<label for="student-name"> Student Name </label>
		<input
			id="Name"
			type="text"
			class="form-control"
			placeholder="Name"
			min="3"
			required
			bind:value={Name}
		/>
	</div>
	<div class="form-actions">
		<button
			type="submit"
			class="btn btn-large btn-form btn-primary"
		>
			Add Student
		</button>
	</div>
</form>