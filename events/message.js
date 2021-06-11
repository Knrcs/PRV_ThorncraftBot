const config = require('../config/config.json');

module.exports = (bot, message) => {
    const fs = require("fs");
    
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;


    //Custom Prefixes
    let prefixes = JSON.parse(fs.readFileSync('./config/prefixes.json', 'utf8'));

    if(!prefixes[message.guild.id]){
        prefixes[message.guild.id] = {
            prefixes: config.prefix
        };
    }

    let prefix = prefixes[message.guild.id].prefixes;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(!message.content.startsWith(prefix)) return;
    if(commandfile) commandfile.run(bot,message,args,prefix,messageArray);
}