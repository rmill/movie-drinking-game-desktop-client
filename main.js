const electron = require('electron');
const { app } = electron;
const { BrowserWindow } = electron;
const { ipcMain } = require('electron');
const admin = require('firebase-admin');
const dotenv = require('dotenv');

// Create  constant for the app path
const APP_PATH = `file://${__dirname}`;
const PROD = 'prod';
let win;

// Setup configuration
dotenv.config();

// Create connection to firebase
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: "drink-up-cinema",
    clientEmail: "firebase-adminsdk-p4izr@drink-up-cinema.iam.gserviceaccount.com",
    privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCxEmfsla+MsQzD\nJv5KWLanshSNUl32FeBOda2EjrD7RfiWVVEGBg4rcTkpLRtZlJDozqq39P+ECQe6\n98NB1/TVdvTYZe0oVZIyG95e8o93A0b9WGEs9mq8pM0CtYCf97lUuDgcUma23J3/\nDvFr0ESNF6sFNPUBqQF6TT1mGwgoxtvLnSJFKRvbwg1zYCbyWDcyS+rYIUfQ8ymm\nKyu3nh14b3UfJWBqfk2j+x6zeHyWB9+NHqbMSy66MmvynHYtNcM0eIjnrF0XzsLH\n3/LPiTMFonMgWTRFYsBjnflyJqLJgXcTYi/YlqUYEN9+iK4hxA8JfftrfuXl0DQW\nun/Cbkh1AgMBAAECggEAD+PsNhe/u4M29ztkVhUsfROW0xDZdEhFyxy139+zQ7Vl\nh84ruXvpIR5lyAtveSRDNdU4Dk6a8IUj77Qkzl+cLdzhP5s0A2rcdgk4tTIUzFQb\ntogMHm4VqYyrhir2GkTvmYn3pRkC9TWKqzUy1p9Hy5acZxj3xLifNJPCZwuVeZ0q\nbp/HPZHHZjcNc14N4v4UaetFKRSELg03K9YSjIPKAvnf6WT3Svr00GvPxvmyuMPH\nQgWcxIvp66WNtiap3wb9YtynDBItqJ/jf/qwqghIuHh5H7/KilpT3YqU52sgp7cn\n8mvxPzHsXWF1herFbhggAhiArAcpfsJWXLCUrlNj8QKBgQDuZcGABe/C+UrrQJPu\nVakSEes6uwdCegoefShQoNp97UvnyC8W8CrTqfy8JJhGBf9S9tFDPY5bteLP01FD\nTECoM/B78JCSSP5yY/FqoAAW4/6qkp9gMqwoSB7EyuOo+3/FegYbPFnkz9h7oaAj\nBRyossgWN+83eH4IwNvgtm9UhQKBgQC+JXWyW+iBge7RZFJaXbjd5IeC+HnTbnav\nd0Ohdvfr0KiGTx8WJkuFD05ex8o71MZ2KDQWH/uw9tyls05JzIQhxCrGFK/gO3gF\nyfFPwKvuqoFySvqpcR7mYHKjqTraxqXPQpdTbSSwNP0N9GEGbt2FxzgvamRnCIy4\nYyMmr0cfMQKBgEyPg0gRIAHWu7e3goqdGfICrS+sVtWDifJmsWbLcb/VUHY8dNsC\nAE7/nXnyqrB6RpgnSec1Qp2zWQbzT3q0Z2NdYtL63AMOzCCCdkqO3dh8GhI/ik2D\nmIRLPQ5oNhrTwiHyYTmn9RqloVl6+4mjn6OR3u47wmhnGtrGzRZqoHBdAoGAO2cE\nf/YKivsGms/WkniZGmkclKP/mzf1SBfgPv8lsLv9CgiJ06efDDCd8SpFWa+9WIhy\nzT6sqLpWcEW1/YQw+0OHgV5RG6I4esZ95sZwcB1AV25pJKo8VwhmiA6EXniUsE1D\nbUK5pXrIW6Wu8g2MkxCL0vRP7YhUPf5qqtkzROECgYEA5ScBr1xULrcPbS9rST9u\nTNRY8I01mxexbgC6I4AzGRmD4NwSBrMEOm4mp9r4YXifcUroQ6v0TiqOPrz9A6sy\n3eGddLQaKc/QxIGCsyeS2SwupR/oicemIq2cjn92X7tXwNrxYzfDCYCpewwq7nPP\nfN6q8HGJzEBYa0vMzlADIlY=\n-----END PRIVATE KEY-----\n"
  }),
  databaseURL: "https://drink-up-cinema.firebaseio.com",
});

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow();
  win.setFullScreen(true);

  if (process.env.NODE_ENV === PROD) {
    win.setMenu(null);
  }

  clearServer()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    clearServer()
    win = null;
  });

  ipcMain.on('push-notification', (e, data) => {
    admin.messaging()[data.action](...data.params)
  });

  ipcMain.on('database', (e, trans) => {
    let ref = admin.database().ref(trans.resource);

    if (trans.action == 'bind') {
      let responseKey = `${trans.resource}/${trans.data.event}`;
      ref.on(trans.data.event, res => {
        const val = res.val()

        if (!val) return

        let message = Object.assign(val, { id: res.key })
        e.sender.send(responseKey, message)
      })
    } else {
      ref[trans.action](trans.data)
    }
  });

  win.loadURL(`${APP_PATH}/dist/index.html`);
}

function clearServer() {
  // Clear the game from the server
  admin.database().ref('game').remove()
  admin.database().ref('player').remove()
  admin.database().ref('answer').remove()
}
