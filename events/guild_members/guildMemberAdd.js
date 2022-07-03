const { MessageEmbed, Formatters } = require('discord.js');
const dayjs = require('dayjs');

module.exports = {
    name: 'guildMemberAdd',
    once: false,
    async execute(client, member) {
        const fetchGuild = await client.getGuild(member.guild);

        const creationTimestamp = Formatters.time(dayjs(member.user.createdTimestamp).unix(), Formatters.TimestampStyles.ShortDateTime);
        const relativeCreationTimestamp = Formatters.time(dayjs(member.user.createdTimestamp).unix(), Formatters.TimestampStyles.RelativeTime);
        const joinTimestamp = Formatters.time(dayjs(member.joinedTimestamp).unix(), Formatters.TimestampStyles.ShortDateTime);
        const relativeJoinTimestamp = Formatters.time(dayjs(member.joinedTimestamp).unix(), Formatters.TimestampStyles.RelativeTime);



        const gmaembed = new MessageEmbed()
            .setAuthor({ name: `${member.user.tag}`, iconURL: member.user.avatarURL() })
            .setColor('GREEN')
            .setDescription(`└► Nom d\'utilisateur : ${member}\n└► ID : \`${member.id}\`\n\n└► Compte créer le : ${creationTimestamp} (${relativeCreationTimestamp})\n└► Rejoint le : ${joinTimestamp} (${relativeJoinTimestamp})`)
            .setTimestamp()
            .setFooter({ text: `L'utilisateur a rejoint ! ✅`})

        const gmaadd = client.channels.cache.get(fetchGuild.gmaadd);
        gmaadd.send({embeds: [gmaembed]});
    }
}