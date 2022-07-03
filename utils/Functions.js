const { Guild } = require('../models');

module.exports = async client => {
  client.getGuild = async guild => {
    const guildData = await Guild.findOne({ id: guild.id });
    return guildData;
  };

  client.createGuild = async guild => {
    const createGuild = new Guild({ id: guild.id, name: guild.name, ownerId: guild.ownerId, invite: guild.invites});
    createGuild.save().then(g => console.log(`Nouveau serveur (${g.id} / ${g.name} / ${g.ownerId} / ${g.invites})`));
  } 
  client.updateGuild = async (guild, settings) => {
    let guildData = await client.getGuild(guild);
    if (typeof guildData != 'object') guildData = {};
    for (const key in settings) {
      if (guildData[key] != settings[key]) guildData[key] = settings[key]
    }
    return guildData.updateOne(settings);
  }
}