const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const ipc = ipcMain;

function createWindow() {
	const win = new BrowserWindow({
		width: 700,
		height: 600,
		resizable: false,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
		},
	});

	win.loadFile('public/index.html');

	ipc.on('closeApp', () => {
		app.quit();
	});

	ipc.on('showAbout', () => {
		let response = dialog.showMessageBoxSync(win, {
			title: 'About',
			type: 'info',
			message:
				'Technologies used :\n\
				-openCV (Opensource Computer Vision)\n\
				-Python\n\
				-Photon UI Kit\n\
				-Svelte\n\
				-Electron',
			detail:
				'Source code is available at https://github.com/meyashtiwari\nDeveloped by Yash Tiwari',
		});
	});
}

app.whenReady().then(() => {
	createWindow();

	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow();
		}
	});
});

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});
