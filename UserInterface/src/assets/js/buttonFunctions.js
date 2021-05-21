const { ipcRenderer } = require('electron');
const ipc = ipcRenderer;

quit.addEventListener('click', () => {
	ipc.send('closeApp');
});

about.addEventListener('click', () => {
	ipc.send('showAbout');
});
