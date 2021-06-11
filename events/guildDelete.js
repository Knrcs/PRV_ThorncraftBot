module.exports = (bot, guild) => {

    const text = ` 
______________________________
[Discord] Removed from a Server
Server: ${guild.name}
Members: -${guild.memberCount}
Total Servers: ${bot.guilds.cache.size}
Total Members: ${bot.users.cache.size}
______________________________
`;
    console.log(text)

}