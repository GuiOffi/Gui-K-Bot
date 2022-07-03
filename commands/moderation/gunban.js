const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'gunban',
    category: 'moderation',
    permissions: ['ADMINISTRATOR'],
    description: 'Bannir un membre de tout les serveur où le bot se trouve !',
    ownerOnly: true,
    usage: 'gunban <ID/USER> <raison>',
    examples: ['gunban ID/USER Trolleur'],
    async run(client, message, args) {  
    },
    options: [
        {
            name: 'target',
            description: 'Personne a bannir du serveur',
            type: 'STRING',
            required: true,
        },
        {
            name: 'raison',
            description: 'Raison du bannissement du membre.',
            type: 'STRING',
            required: false,
        }
    ],
    async runInteraction(client, interaction) {
        const target = interaction.options.getString('target');
        const raison = interaction.options.getString('raison');

        // if (!target.bannable) return interaction.reply('Ce membre ne peut être ban.');

        client.guilds.cache.forEach(a => a.members.unban(target))
        const banEmbed = new MessageEmbed()
            .setColor('GREEN')
            .setTitle(`Un joueur a été débannie.`)
            .setDescription(`**ID:** \`\`${target}\`\`\n**Pseudo:** <@${target}>`)
            .setFooter({ text: `La personne a été débannie par: ${interaction.user.tag}`});
        interaction.reply({ embeds: [banEmbed]});
    }
};