const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'clear',
    category: 'moderation',
    permissions: ['MANAGE_MESSAGES'],
    description: 'Suppression d\'un nombre de message!',
    ownerOnly: false,
    usage: 'clear [quantitée] <@cible>',
    examples: ['clear 50', 'clear 50 @Gui.#6666'],
    run(client, message, args) {
        
    },
    options: [
        {
            name: 'message',
            description: 'Quantitée de message a effacer !',
            type: 'NUMBER',
            required: true,
        }
    ],
    async runInteraction(client, interaction) {
        const amountToDelete = interaction.options.getNumber('message');
        if (amountToDelete > 100 || amountToDelete < 0) return interaction.reply('Le NOMBRE doit être supérieur à 0 et inférieur à 100 !');
        const target = interaction.options.getMember('target');

        const messagesToDelete = await interaction.channel.messages.fetch();

        if (target) {
            let i = 0;
            const filteredTargetMessages = [];
            (await messageToDelete).filter(msg => {
                if (msg.author.id == target.id && amountToDelete > i) {
                    filteredTargetMessages.push(msg); i++;
                }
            });
            await interaction.channel.bulkDelete(amountToDelete, true).then(messages => {
                interaction.reply(`J'ai supprimé ${messages.size} messages dans le salon.`)
            })
        }
    }
};