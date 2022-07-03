// const emoji = require("../../commands/utils/emoji");
// const interactionCreate = require("../client/interactionCreate");
// const ownerId = '771148748193529906';

module.exports = {
    name: 'messageReactionAdd',
    once: false,
    async execute(client, messageReaction, user) {
      const message = messageReaction.message;
      const emojiName = messageReaction.emoji.name;
      const member = message.guild.members.cache.get(user.id);
      if (member.user.bot) return;
      if (messageReaction.partial) {
      try{
        await messageReaction.fetch();
      } catch (error) {
        console.log('Impossible de récupérer les messages.')
        return;
      }}
      if (emojiName === '🔴') message.delete();
      if (emojiName === '🟠') message.reactions.removeAll();
      if (emojiName === '🟢') member.send('NIQUE TA MERE LA PUTE');

    },
};