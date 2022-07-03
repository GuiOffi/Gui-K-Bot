const { Client, Collection } = require('discord.js');
const dotenv = require('dotenv'); dotenv.config();
const client = new Client({ intents: 1539, partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'USER']});
const mongoose = require('mongoose');
const Logger = require('./utils/Logger');

['commands', 'buttons', 'selects'].forEach(x => client[x] = new Collection());
['CommandUtil', 'EventUtil', 'ButtonUtil', 'SelectUtil'].forEach(handler => { require(`./utils/handlers/${handler}`)(client) });
require('./utils/Functions')(client);

process.on('exit', code => { Logger.client(`Le processus s'est arrêté avec le code: ${code}!`) });

process.on('uncaughtException', (err, origin) => {
     Logger.error(`UNCAUGHT_EXCEPTION: ${err}`);
     console.error(`Origine: ${origin}`);
})

process.on('unhandledRejection', (reason, promise) => {
     Logger.warn(`UNHANDLED_REJECTION: ${reason}`, promise);
     console.log(promise);
})

process.on('warning', (...args) => console.log(...args));

mongoose.connect(process.env.DATABASE_URI, {
    autoIndex: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4
}).then(() => { Logger.client('Connecté a la BDD !') })
.catch(err => { Logger.error(err)});

client.login(process.env.DISCORD_TOKEN);