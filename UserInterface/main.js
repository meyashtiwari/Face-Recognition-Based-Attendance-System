const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const ipc = ipcMain;

function createWindow() {
	const win = new BrowserWindow({
		width: 900,
		height: 600,
		resizable: false,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
			preload: path.join(__dirname, 'preload.js'),
		},
	});

	win.loadFile('./src/index.html');

	ipc.on('closeApp', () => {
		app.quit();
	});

	ipc.on('showAbout', () => {
		dialog.showMessageBoxSync({
			message: 'Hello',
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
