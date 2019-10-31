const electron = require('electron');
const { app, BrowserWindow, ipcMain } = electron;
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

    ipcMain.on("openWindow", (err, folderName) => {

        newPageWindow = new BrowserWindow({
            width: 1366,
            height: 768,
            webPreferences: {
                nodeIntegration: true
            }
        });

        let editedPath = "/Pages/" + folderName + "/index.html";
        newPageWindow.loadURL(path.join(__dirname, editedPath));

        newPageWindow.on("close", () => {
            newPageWindow = null;
        });

    });

})
