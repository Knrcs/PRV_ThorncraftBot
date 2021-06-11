//load minecraft util%
const util = require('minecraft-server-util');
//load token
const config = require('../config/config.json');
const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefix) => {

    util.status(config.minecraft.serverip, {port: 25565})
        .then((response) =>{
            let online = response.onlinePlayers

            let desc = '';
            response.samplePlayers.forEach(player => {
                desc += `${player.name}\n`
            });
            
            const embed = new Discord.MessageEmbed()
            .setColor("#FF2AA2")
            .addFields(
                    { name: 'Currently Online:', value: `${online} / 20` },
                    { name: `Players:`, value:`${desc}`}
                    )
        
            .setTimestamp()
            message.channel.send(embed);
            console.log (`[Discord] ${message.author.tag} used Command: Online`)
        });




}

module.exports.help = {
    name: "online"
}
