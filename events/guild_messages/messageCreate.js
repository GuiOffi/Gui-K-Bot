const interactionCreate = require("../client/interactionCreate");
const ownerId = '771148748193529906';
const gBanId = '568068519984627712';
module.exports = {
    name: 'messageCreate',
    once: false,
    async execute(client, message) {
        let guildSettings = await client.getGuild(message.guild);

        if (!guildSettings) {
            await client.createGuild(message.guild);
            guildSettings = await client.getGuild(message.guild)
            return interaction.reply('Le bot a mis a jour la base de données pour votre serveur, retaper la commande !');
        }
        const prefix = guildSettings.prefix;


        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;


        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmdName = args.shift().toLowerCase();
        if (cmdName.length == 0) return;

        let cmd = client.commands.get(cmdName);
        if (!cmd) return interaction.reply({content: `Cette commande n'existe pas.`, ephemeral: true});

        if (cmd.ownerOnly) {
            if (interaction.user.id != ownerId) return interaction.reply({ content: `La seule personne qui peut faire sa est l'owner du bot.`, ephemeral: true});
        }
        if (cmd.gbanOnly) {
            if (interaction.user.id != gBanId) return interaction.reply({ content: `Seule les bannisseurs global sont autorisées.`, ephemeral: true});
        }

        if (!message.member.permissions.has([cmd.permissions])) return message.reply(`Vous n'avez pas la permission \`${cmd.permissions.join(', ')}\` nécessaire pour l'utilisation de cette commande!`, {ephemeral: true})

        if (cmd) cmd.run(client, message, args, guildSettings);
    }
}