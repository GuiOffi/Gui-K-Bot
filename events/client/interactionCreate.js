const messageCreate = require("../guild_messages/messageCreate");
const ownerId = '771148748193529906';
const gBanId = '568068519984627712';

module.exports = {
    name: 'interactionCreate',
    once: false,
    async execute(client, interaction) {
        let guildSettings = await client.getGuild(interaction.guild);

        if (!guildSettings) {
            await client.createGuild(interaction.guild);
            guildSettings = await client.getGuild(interaction.guild)
            return interaction.reply('Le bot a mis a jour la base de données pour votre serveur, retaper la commande !');

        }

        if (interaction.isCommand() || interaction.isContextMenu()) {
            const cmd = client.commands.get(interaction.commandName);
            if (!cmd) return interaction.reply('Cette commande n\'existe pas!');


            if (cmd.ownerOnly) {
                if (interaction.user.id != ownerId) return interaction.reply({ content: `La seule personne qui peut faire sa est l'owner du bot.`, ephemeral: true});
            }

            if (cmd.gbanOnly) {
                if (interaction.user.id != gBanId) return interaction.reply({ content: `Seule les bannisseurs global sont autorisées.`, ephemeral: true});
            }



            if (!interaction.member.permissions.has([cmd.permissions])) return interaction.reply({content: `Tu n'as pas la/les permission(s) requise(s) pour éxécuter cette commande.`, ephemeral: true });

            cmd.runInteraction(client, interaction, guildSettings);
        } else if (interaction.isButton()) {
            const btn = client.buttons.get(interaction.customId);
            if (!btn) return interaction.reply('Ce bouton n\'existe pas!');
            btn.runInteraction(client, interaction, guildSettings);
        } else if (interaction.isSelectMenu()) {
            const selectMenu = client.selects.get(interaction.customId);
            if (!selectMenu) return interaction.reply('Ce menu n\'existe pas!');
            selectMenu.runInteraction(client, interaction, guildSettings);
        }
    },
};