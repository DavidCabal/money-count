const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 200,
    height: 200,
    webPreferences: {
      nodeIntegration: true
    },
    minimizable: false,
    maximizable: false,
    icon: __dirname + '/assets/icon.png'
  });

  win.removeMenu();
  win.setBackgroundColor('#656565');

  win.loadFile('index.html');

  // win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {

});

app.on('activate', () => {

});
