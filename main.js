const electron = require('electron');
const { app, BrowserWindow } = electron
const path = require('path')
require('dotenv').config()



function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1000,
        height: 700,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
            contextIsolation: false,

        }
    })

    //mainWindow.webContents.openDevTools()




    mainWindow.loadURL(process.env.START_URL)


}



app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {

            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})




