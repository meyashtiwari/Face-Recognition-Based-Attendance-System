<script context="module">
	const fs = require('fs');
	const parse = require('csv-parse');
	const path = require('path');
</script>

<script>	
	const directoryPath = '../engine/Attendance';
	var records = [];
	let i = 0;
	fs.readdir(directoryPath, function(err, files) {
		if(err) {
			return console.log("Unable to scan directory : " + err);
		}
		files.forEach(function(file) {
			let inputFile = path.join(directoryPath, file); 
			let parser = parse({delimiter: ',', from_line: 2}, function (err, data) {
				data.forEach(function(line) {
					records[i++] = { "Id" : line[0]
									, "Name" : line[1]
									, "Date" : line[2]
									, "Time" : line[3]
								};
				});    
			});
			fs.createReadStream(inputFile).pipe(parser);
		});
	});
</script>

<table class="table-striped">
	<thead>
		<tr>
			<th>ID</th>
			<th>Name</th>
			<th>Date</th>
			<th>Time</th>
		</tr>
	</thead>
	<tbody>
		{#each records as record (record.Id)}
			<tr>
				<td>{record.Id}</td>
				<td>{record.Name}</td>
				<td>{record.Date}</td>
				<td>{record.Time}</td>
			</tr>
		{:else}
			<tr>
				<td>empty</td>
				<td>empty</td>
				<td>empty</td>
				<td>empty</td>
			</tr>
		{/each}
	</tbody>
</table>