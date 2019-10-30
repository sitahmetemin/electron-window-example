const electron = require('electron');
const {app, BrowserWindow} = electron;
const path = require("path");

app.on('ready', () => {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    win.loadURL(path.join(__dirname, "/Pages/Main/index.html"));
})

exports.openWindow = (folderName) => {
    let win = BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    let editedPath = '/Pages/' + folderName + '/index.html';
    win.loadURL(path.join(__dirname, editedPath));
}