console.time("timer")
const electron = require('electron');
const { app, BrowserWindow } = electron
const path = require('path')
require('dotenv').config()

let mainWindow, loadingWindow

app.whenReady().then(main);


async function main() {
    createLoadingWindow()

    const mainWindow = new BrowserWindow({
        width: 1000,
        height: 700,
        show: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
            contextIsolation: false,

        }
    })
    mainWindow.loadURL(process.env.START_URL)
    mainWindow.on("ready-to-show", () => {
        setTimeout(() => {
            loadingWindow.close();
            mainWindow.show();
            console.timeEnd("timer")

        }, 3000)
    })


}

function createLoadingWindow() {
    loadingWindow = new BrowserWindow({
        width: 400,
        height: 300,
        frame: false,
        transparent: true,
        alwaysOnTop: true,

    })
    loadingWindow.loadFile('loading.html')
}




