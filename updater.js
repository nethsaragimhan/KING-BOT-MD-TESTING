require('./_changes')
const simpleGit = require('simple-git');
const git = simpleGit();
const {Module} = require('../main');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const Heroku = require('heroku-client');
const { PassThrough } = require('stream');
const heroku = new Heroku({ token: ${global.HEROKU_API_KEY })

switch(command) {
        case 'update$': fromMe: true, :{
    await git.fetch();
    var commits = await git.log(['main' + '..origin/' + 'main']);
    if (commits.total === 0) {
    await GojoMdNx.sendMessage(`*Your Bot Is complete up-to-date!*` })

    } else {
        var degisiklikler = "Updates are available\n";
        commits['all'].map(
            (commit) => {
                degisiklikler += '(' + commit.date.substring(0, 10) + ') : *' + commit.message.replace('Update','Fixed').replace('.js','') + '*\n';
            }
        );
        
        await GojoMdNx.sendMessage(message.jid, { text:degisiklikler})

    }
}));

        case 'update now$': fromMe: true, :{
    await git.fetch();
    var commits = await git.log(['main' + '..origin/' + 'main']);
    if (commits.total === 0) {
        return await GojoMdNx.sendMessage(message.jid, { text:"_Bot up to date_"})

    } else {
        await GojoMdNx.sendMessage(message.jid, { text:"_Build started_"})

            try {
                var app = await heroku.get('/apps/' + ${global.HEROKU_API_KEY )

            } catch {
                await ${global.HEROKU_API_KEY })
(message.jid, { text:"Heroku information wrong!"})

                await new Promise(r => setTimeout(r, 1000));
            }
            git.fetch('upstream', 'main');
            git.reset('hard', ['FETCH_HEAD']);

            var git_url = app.git_url.replace(
                "https://", "https://api:" + ${global.HEROKU_API_KEY} + "@"
            )
            
            try {
                await git.addRemote('heroku', git_url);
            } catch { console.log('heroku remote ekli'); }
            await git.push('heroku', 'main');

            await GojoMdNx.sendMessage(message.jid, { text:"_Successfully updated_"})
           await GojoMdNx.sendMessage(message.jid, { text:"_Restarting_"})
            
        
    }
}));
