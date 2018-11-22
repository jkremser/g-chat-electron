const {app, BrowserWindow} = require('electron') // http://electron.atom.io/docs/api
const commandLineArgs = require('command-line-args')
const commandLineUsage = require('command-line-usage')
const repoUrl = require('./package.json').repository.url;
const chalk = require('chalk');
const optionDefinitions = require('./options');


let window = null

// Wait until the app is ready
app.once('ready', () => {
  // Create a new window
  window = new BrowserWindow({
    // Set the initial width to 800px
    width: 800,
    // Set the initial height to 600px
    height: 600,
    // Don't show the window until it ready, this prevents any white flickering
    show: false,
    webPreferences: {
      // Disable node integration in remote page
      nodeIntegration: false
    }
  })

  const sections = [
    {
      header: require('./package.json').name,
      content: require('./package.json').description
    },
    {
      header: 'Options',
      optionList: optionDefinitions
    },
    {
      content: `Project home: {italic ${repoUrl}}`
    }
  ]
  const usage = commandLineUsage(sections)
  console.log(usage)

  console.log(chalk.red('foobar'))

  const options = commandLineArgs(optionDefinitions)

  console.log(options)

  //const url = process.argv[2]
  window.loadURL("https://chat.google.com")

  // Show window when page is ready
  window.once('ready-to-show', () => {
    window.maximize()
    window.show()
  })
})
