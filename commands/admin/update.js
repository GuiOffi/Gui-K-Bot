const { Guild } = require("../../models/index");

module.exports = {
    name: 'update',
    category: 'admin',
    permissions: ['ADMINISTRATOR'],
    description: 'Mettre a jour les données de la BDD !',
    ownerOnly: false,
    usage: 'update',
    examples: ['update'],
    run(client, message, args) {
        
    },
    async runInteraction(client, interaction) {
      await Guild.updateMany({}, { "$set": {'testChannel': "645465231"}, upsert: true})
      interaction.reply('Nouvelles données ajoutées !')
    },
};