//load token
const config = require('./config/config.json');
//Discord.js lib
const DiscordJS = require('discord.js');
//WOKCommands lib
const WOKCommands = require ('wokcommands');
//Deactivate @everyone
const guildId = '741086092069175349'
const client = new DiscordJS.Client();

client.on('ready', () => {
    new WOKCommands(client, {
        commandsDir: 'commands',
        testServers: [guildId],
        showWarns: false
    })
})

client.login(config.token);