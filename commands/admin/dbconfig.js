const { MessageEmbed } = require("discord.js");
const { Client, Collection } = require('discord.js');

module.exports = {
    name: 'config',
    category: 'admin',
    permissions: ['ADMINISTRATOR'],
    description: 'Configurer les données de la BDD !',
    ownerOnly: false,
    usage: 'config [key] <value>',
    examples: ['config', 'dbconfig prefix ?'],
    async run(client, message, args) {
        
    },
    options: [
        {
            name: 'key',
            description: 'Logs a enregistrer:',
            type: 'STRING',
            required: true,
            choices: [
                {
                    name: 'Préfix du bot.',
                    value: 'prefix'
                },
                {
                    name: 'ID Channel de logs (ban, kick, ...)',
                    value: 'logChannel'
                },
                {
                    name: 'ID Channel Logs arrivées.',
                    value: 'gmaadd'
                },
                {
                  name: 'ID Channel Logs départs.',
                  value: 'gmadel'
              },
                {
                    name: 'ID Rôle pour verification anti-bot.',
                    value: 'newVerif'
                },
                {
                  name: 'ID Channel Logs salon.',
                  value: 'logsSalon'
                }
            ]
        },
        {
          name: 'value',
          description: 'ID du channel pour les logs:',
          type: 'STRING',
      }
    ],
    async runInteraction(client, interaction, guildSettings) {
        const key = interaction.options.getString('key');
        const value = interaction.options.getString('value');

        if (key == 'prefix') {
          if (value) {
            await client.updateGuild(interaction.guild, { prefix: value});
            await interaction.reply({ content: `Valeur de préfix : \`${value}\``}); return;
          }
          await interaction.reply({ content: `Valeur de préfix : \`${guildSettings.prefix}\` !`});

        } else if (key  == "logChannel") {
          if (value) {
            await client.updateGuild(interaction.guild, { logChannel: value});
            await interaction.reply({ content: `Valeur de channel de logs : \`${value}\``}); return;
          }
          await interaction.reply({ content: `Valeur de channel de logs : \`${guildSettings.logChannel}\` !`});

        } else if (key  == "gmaadd") {
          if (value) {
            await client.updateGuild(interaction.guild, { gmaadd: value});
            await interaction.reply({ content: `Nouveau channel pour les logs d'arrivée(s) : <#${value}>`}); return;
          }
          await interaction.reply({ content: `Channel actuel pour les logs d'arrivée(s) : <#${guildSettings.gmaadd}> !`});

        } else if (key  == "gmadel") {
          if (value) {
            await client.updateGuild(interaction.guild, { gmadel: value});
            await interaction.reply({ content: `Nouveau channel pour les logs de départ(s) : <#${value}>`}); return;
          }
          await interaction.reply({ content: `Channel actuel pour les logs d'arrivée(s) : <#${guildSettings.gmadel}> !`});

        } else if (key  == "newVerif") {
          if (value) {
            await client.updateGuild(interaction.guild, { newVerif: value});
            await interaction.reply({ content: `Valeur de channel de newVerif : \`${value}\``}); return;
          }
          await interaction.reply({ content: `Valeur de channel de newVerif : \`${guildSettings.newVerif}\` !`});

        } else if (key  == "logsSalon") {
          if (value) {
            await client.updateGuild(interaction.guild, { newVerif: value});
            await interaction.reply({ content: `Nouveau channel pour les logs salon : \`${value}\``}); return;
          }
          await interaction.reply({ content: `Channel actuel pour les logs salon : \`${guildSettings.logsSalon}\` !`});

        }

    }
}