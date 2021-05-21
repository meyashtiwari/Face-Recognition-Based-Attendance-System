const { ipcRenderer } = require('electron');
const ipc = ipcRenderer;
const $ = require('jquery');

$('#content').load('./new_student.html');

option1.addEventListener('click', () => {
	option1.classList.add('active');
	option2.classList.remove('active');
	option3.classList.remove('active');
	$('#content').load('./new_student.html');
	content.classList.add('no-table');
});

option2.addEventListener('click', () => {
	option1.classList.remove('active');
	option2.classList.add('active');
	option3.classList.remove('active');
	$('#content').load('./mark_attendance.html');
	content.classList.add('no-table');
});

option3.addEventListener('click', () => {
	option1.classList.remove('active');
	option2.classList.remove('active');
	option3.classList.add('active');
	$('#content').load('./check_attendance.html');
	content.classList.remove('no-table');
});

quit.addEventListener('click', () => {
	ipc.send('closeApp');
});

about.addEventListener('click', () => {
	ipc.send('showAbout');
});
