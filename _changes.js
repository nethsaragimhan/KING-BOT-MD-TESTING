const fs = require('fs')
const chalk = require('chalk')


global.HEROKU_API_KEY = ['💥']
global.HEROKU_APP_NAME = ['💥']


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
