const { app, BrowserWindow } = require("electron");

let win;
function createWindow() {
  win = new BrowserWindow({
    minWidth: 800,
    minHeight: 600,
    titleBarStyle: "customButtonsOnHover",
    frame: false
  });

  win.loadFile("index.html");

  win.webContents.openDevTools();

  win.on("closed", () => {
    win = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});
