module.exports = {
    name: 'lock',
    category: 'moderation',
    permissions: ['MANAGE_CHANNELS'],
    description: 'Verrouiller un salon',
    ownerOnly: false,
    usage: 'lock',
    examples: ['lock'],
    async runInteraction(client, interaction) {
        await interaction.channel.permissionOverwrites.edit(interaction.guild.id, { SEND_MESSAGES: false});
        await interaction.reply({ content: `Le salon <#${interaction.channel.id}> a été verrouillé ! 🔒`, ephemereal: false});
    }
};