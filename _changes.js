const fs = require('fs')
const chalk = require('chalk')


global.HEROKU_API_KEY = ['6c9e7970-3cd5-4e00-8daa-bba5f79eeaea']
global.HEROKU_APP_NAME = ['kingbottestwithupcmd']


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
