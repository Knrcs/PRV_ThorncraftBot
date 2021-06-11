const stats = {
    serverID: "723220400267591711",
    member: "725024241006936174",
}
const Discord = require("discord.js");

//Startup
module.exports = (bot, member) => {
    const text = ` 
______________________________
Logged in as: ${bot.user.tag}
Servers: ${bot.guilds.cache.size}
Users: ${bot.users.cache.size}
______________________________
`;
console.log(text);
   //Später nachschauen //console.log(`New guild has been joined: ${guilds.name} (${guilds.id}) with ${guilds.memberCount - 1} members`);

//Bot status UwU
const package = require("../package.json")
const status_list = [
    `Broooo!`,
    `!!online | only feature lol`
];

    setInterval(() => {
        const index = Math.floor(Math.random() * (status_list.length -1) +1);
        bot.user.setActivity(status_list[index]);
    }, 30000);

}