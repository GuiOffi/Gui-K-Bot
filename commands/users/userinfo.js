const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'Informations Utilisateur',
    category: 'users',
    permissions: ['SEND_MESSAGES'],
    type: 'USER',
    async runInteraction(client, interaction) {
        const member = await interaction.guild.members.fetch(interaction.targetId);
        const userinfoembed = new MessageEmbed()
            .setAuthor({ name: `${member.user.tag} (${member.id})`, iconURL: member.user.bot ? 'https://images.emojiterra.com/google/android-11/512px/1f916.png' : 'https://www.qrpatrol.com/sites/default/files/plain-distribution.png'})
            .setColor('BLUE')
            .setImage(member.user.displayAvatarURL())
            .addFields(
                { name: 'Nom', value: `${member.displayName}`, inline: true },
                { name: 'Modérateur', value: `${member.kickable ? '🔴' : '🟢'}`, inline: true },
                { name: 'Bot', value: `${member.user.bot ? '🟢' : '🔴'}`, inline: true },
                { name: 'Roles', value: `${member.roles.cache.map(role => role).join(', ')}` },
                { name: 'A rejoint le', value: `<t:${parseInt(member.joinedTimestamp / 1000)}:f> (<t:${parseInt(member.joinedTimestamp / 1000)}:R>)` },
                { name: 'Compte créer le', value: `<t:${parseInt(member.user.createdTimestamp / 1000)}:f> (<t:${parseInt(member.user.createdTimestamp / 1000)}:R>)` }
            )
        interaction.reply({embeds: [userinfoembed], ephemeral: true});
    }
}