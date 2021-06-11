//Variabeln erstellen, um Code zu sparen (ordnung)
//Discord Einladungs link
//https://discord.com/api/oauth2/authorize?client_id=708567389859479573&permissions=519232&scope=bot

//Discord.js Libiary 
console.log("[Discord] Loading dependencies")
const Discord = require("discord.js");
//@Everyone deaktivieren
const bot = new Discord.Client({disableEveryone: true});
//Token
const config = require('./config/config.json');
const fs = require("fs");
const path = require("path");
bot.commands = new Discord.Collection();


//Event Collection (Handler)
fs.readdir("./events/", (err, files) => {
    if(err) console.log(err);
    files.forEach(file => {
        if (!file.endsWith('.js')) return;
        const evt = require(`./events/${file}`);
        let evtName = file.split('.')[0];
        console.log(`Event: [${evtName}] loaded!`);
        bot.on(evtName, evt.bind(null, bot))
    });
});

//Command Collection (Handler)
fs.readdir("./commands/", (err, files) => {
    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("Couldn't find commands!");
        return;
    }

    jsfile.forEach((f, i) =>{
        let props = require(`./commands/${f}`);
        let cmdName = f.split('.')[0];
        console.log(`Command: [${cmdName}] loaded!`);
        bot.commands.set(props.help.name, props);
    });
});






//Bot Einloggen
bot.login(config.token);