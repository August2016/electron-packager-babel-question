import path from 'path';
import url from 'url';
import electron from 'electron';

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

function createWindow() {
    let mainWindow = new BrowserWindow({ width: 800, height: 600 });

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, './index.html'),
        protocol: 'file:',
        slashes: true
    }))
}

app.on('ready', createWindow);
