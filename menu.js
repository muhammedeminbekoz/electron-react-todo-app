
const mainMenuTemplate = [
    {
        label: "Faydalı linkler",
        submenu: [
            {
                label: "çingenem",
                click: async () => {
                    const { shell } = require('electron')
                    await shell.openExternal('https://www.youtube.com/watch?v=u7uviW6Z71g')
                }
            },
            {
                label: "eyşan",
                click: async () => {
                    const { shell } = require('electron')
                    await shell.openExternal('https://www.youtube.com/watch?v=Sx6Fj5gYhT0')
                }
            },
            {
                label: "baba",
                click: async () => {
                    const { shell } = require('electron')
                    await shell.openExternal('https://www.youtube.com/watch?v=GYiuN1TfAMg')
                }
            },
            {
                label: "150m",
                click: async () => {
                    const { shell } = require('electron')
                    await shell.openExternal('https://www.youtube.com/watch?v=Iv6OYWmTu8E')
                }

            }
        ]
    },

    {
        label: 'Hakkımda',
        submenu: [
            {
                label: "Github",
                click: async () => {
                    const { shell } = require('electron')
                    await shell.openExternal('https://github.com/muhammedeminbekoz')
                }
            },
            {
                label: "Linkedin",
                click: async () => {
                    const { shell } = require('electron')
                    await shell.openExternal('https://www.linkedin.com/in/muhammed-emin-bek%C3%B6z/')
                }
            },

        ]
    }

]


module.exports = {
    mainMenuTemplate
}