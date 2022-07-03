const { MessageEmbed } = require("discord.js");
const { Client, Collection } = require('discord.js');


module.exports = {
  name: 'unlock',
  category: 'moderation',
  permissions: ['MANAGE_CHANNELS'],
  description: 'Déverrouiller un salon',
  ownerOnly: false,
  usage: 'unlock',
  examples: ['unlock'],
  async runInteraction(client, interaction, member) {
      const fetchGuild = await client.getGuild(interaction.guild);
      await interaction.channel.permissionOverwrites.edit(interaction.guild.id, { SEND_MESSAGES: true});
      await interaction.reply({ content: `Le salon <#${interaction.channel.id}> a été déverrouillé ! 🔐`, ephemereal: false});
      // const unlockEmbed = new MessageEmbed()
      //       .setColor('BLACK')
      //       .setDescription(`${member.tag} vient de dévérouiller le channel.`)
      //       .setTimestamp()
      //       .setFooter({ text: `Fait par : ${interaction.user.tag}`});
      // const logsS = client.channels.cache.get(fetchGuild.logsSalon);
      // await logsS.channel.send({embeds: [unlockEmbed]});
  }
};