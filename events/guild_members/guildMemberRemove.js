const { MessageEmbed, Formatters } = require('discord.js');
const dayjs = require('dayjs');

module.exports = {
    name: 'guildMemberRemove',
    once: false,
    async execute(client, member) {
        const fetchGuild = await client.getGuild(member.guild);

        const creationTimestamp = Formatters.time(dayjs(member.user.createdTimestamp).unix(), Formatters.TimestampStyles.ShortDateTime);
        const relativeCreationTimestamp = Formatters.time(dayjs(member.user.createdTimestamp).unix(), Formatters.TimestampStyles.RelativeTime);
        const joinTimestamp = Formatters.time(dayjs(member.joinedTimestamp).unix(), Formatters.TimestampStyles.ShortDateTime);
        const relativeJoinTimestamp = Formatters.time(dayjs(member.joinedTimestamp).unix(), Formatters.TimestampStyles.RelativeTime);
        const leaveTimestamp = Formatters.time(dayjs().unix(), Formatters.TimestampStyles.ShortDateTime);
        const relativeLeaveTimestamp = Formatters.time(dayjs().unix(), Formatters.TimestampStyles.RelativeTime);



        const gmrembed = new MessageEmbed()
            .setAuthor({ name: `${member.user.tag}`, iconURL: member.user.avatarURL() })
            .setColor('BLACK')
            .setDescription(`└► Nom d\'utilisateur : ${member.displayName}\n└► ID : \`${member.id}\`\n\n└► Compte créer le : ${creationTimestamp} (${relativeCreationTimestamp})\n└► Rejoint le : ${joinTimestamp} (${relativeJoinTimestamp})\n└► Quitté le : ${leaveTimestamp} (${relativeLeaveTimestamp})`)
            .setTimestamp()
            .setFooter({ text: `L'utilisateur a quitté ! ❎`})

        const gmadel = client.channels.cache.get(fetchGuild.gmadel);
        if (!fetchGuild.gmadel === '') return;
        gmadel.send({embeds: [gmrembed]});
    }
}