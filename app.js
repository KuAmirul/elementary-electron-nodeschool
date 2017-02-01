  var electron = require('electron')

     electron.app.on('ready', function () {
       var mainWindow = new electron.BrowserWindow({width: 600, height: 800})
       mainWindow.loadURL('file://' + 'C:/Users/user/elementary-electron/index.html')
     })