const Logger = require('../../utils/Logger');


module.exports = {
    name: 'ready',
    once: true,
    async execute(client, guild) {

        let guildsCount = await client.guilds.fetch();
        let usersCount = client.guilds.cache.reduce((a, g) => a + g.membercount, 0);

        client.user.setPresence({ activities: [{ name: 'vos données..', type: 'LISTENING' }], status: 'dnd'})
        Logger.client(`Connecté ! ✅`);
        Logger.info(`Prêt a être utilisé sur ${guildsCount.size} serveurs.`);
        Logger.info(`https://discord.com/api/oauth2/authorize?client_id=966666716321042465&permissions=8&scope=bot%20applications.commands`)
        const devGuild = await client.guilds.cache.get('988940321629036554');
        devGuild.commands.set(client.commands.map(cmd => cmd));
        // console.log(client.guilds.cache.get('964759684403847219'));
        // client.application.commands.set(client.commands.map(cmd => cmd))
    }
}