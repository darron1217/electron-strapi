// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')
const { fork } = require('child_process')
const log = require('electron-log')
const {host, port} = require('./config/server')

Object.assign(console, log.functions);

function startServer (win) {
  // and load the index.html of the app.
  const strapi = fork(path.join(__dirname, 'serve.js'), { silent : true })

  strapi.stdout.on('data', function (data) {
    console.log(data.toString().trimEnd());
  });

  strapi.on('message', (m) => {
    if(m == 'ready') {
      win.loadURL(`http://${host}:${port}/`);
    }
    if(m == 'reload') {
      strapi.kill()
      startServer(win)
    }
    console.log('Got message:', m);
  });

}

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    maximizable: true,
    width: 1024,
    height: 768,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.webContents.on('new-window', (event, url) => {
    event.preventDefault()
    mainWindow.loadURL(url)
  })

  startServer(mainWindow)

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
