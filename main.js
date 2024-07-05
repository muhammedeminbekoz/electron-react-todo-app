console.time("timer")
const electron = require('electron');
const { app, BrowserWindow, Menu, dialog } = electron
const path = require('path');
const { mainMenuTemplate } = require('./menu');
const { type } = require('os');
require('dotenv').config()
//const mainMenuTemplate = require('./menu')

let mainWindow, loadingWindow

app.whenReady().then(main);


function main() {
    createLoadingWindow()

    mainWindow = new BrowserWindow({
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

        }, 2000)
    })

    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate)
    Menu.setApplicationMenu(mainMenu)

    mainWindow.on('close', (e) => {
        e.preventDefault();

        const response = dialog.showMessageBoxSync(mainWindow, {
            type: 'question',
            buttons: ['bişey yok bişey yok', 'biraz var sanki ya'],
            defaultId: 0,
            title: 'Çıkmak için soruyu cevaplayın.',
            message: 'Ahmet sence ben deli miyim ?'

        })

        if (response === 0) {
            mainWindow.destroy();
        }


    })
    app.on('window-all-closed', () => {
        if (process.platform == 'darwin') {
            app.quit()
        }
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
    loadingWindow.loadFile(process.env.LOADING_URL)
}





