const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'gban',
    category: 'moderation',
    permissions: ['ADMINISTRATOR'],
    description: 'Bannir un membre de tout les serveur Sensity.',
    ownerOnly: false,
    usage: 'gban <ID/USER> <raison>',
    examples: ['gban ID/USER Trolleur'],
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
    async runInteraction(client, interaction, member) {
        const target = interaction.options.getString('target');
        const raison = interaction.options.getString('raison');

        // if (!target.bannable) return interaction.reply('Ce membre ne peut être ban.');

        client.guilds.cache.forEach(a => a.members.ban(target))
        const banEmbed = new MessageEmbed()
            .setColor('ORANGE')
            .setTitle(`Un joueur a été banni.`)
            .setDescription(`**ID:** \`\`${target}\`\`\n**Pseudo:** <@${target}>`)
            .setFooter({ text: `La personne a été bannie définitivement par: ${interaction.user.tag}`});
        interaction.reply({ embeds: [banEmbed]});
    }
};