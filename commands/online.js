//load minecraft util%
const util = require('minecraft-server-util');
//load token
const config = require('../config/config.json');
//Discord.js lib
const { MessageEmbed } = require('discord.js');
const { default: messageHandler } = require('wokcommands/dist/message-handler');


module.exports = {
    slash: true,
    testOnly: true,
    description: 'List all players, who are currently online',
    callback: () => {
        util.status(config.minecraft.serverip, {port: 25565}).then((response) =>{
            console.log(response)
            const player = response.samplePlayers;
            const online = response.onlinePlayers;

        });
        
    const embed = new MessageEmbed()
.setColor('#79014A')
.setTitle('Online Players')
.addFields (
    {name: 'Playercount:', value: `${online}`},
    {name: 'Online Players:', value: response.samplePlayers},
    {name: 'test', value: 'test'})


    return embed
    },

}
