module.exports = (bot, guild) => {

    const text = ` 
______________________________
[Discord] Joined New Server
Server: ${guild.name}
Members: ${guild.memberCount}
Total Servers: ${bot.guilds.cache.size}
Total Members: ${bot.users.cache.size}
______________________________
`;
    console.log(text)
 
}