const fs = require('fs')
const chalk = require('chalk')


global.HEROKU_API_KEY = ['1bfdc24f-90b1-4ce5-8e9f-22ca3dcc3a26']
global.HEROKU_APP_NAME = ['kingbottestwithupcmd']


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
