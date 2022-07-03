const mongoose = require('mongoose');
const { Client, Collection } = require('discord.js');


const guildSchema = mongoose.Schema({
    id: String,
    name: String,
    ownerId: String,
    invites: String,
    prefix: { 'type': String, 'default': ',' },
    logChannel: { 'type': String, 'default': '' },
    gmaadd: { 'type': String, 'default': '' },
    gmadel: { 'type': String, 'default': '' },
    newVerif: { 'type': String, 'default': '' },
    logsSalon: { 'type': String, 'default': '' }
});

module.exports = mongoose.model('Guild', guildSchema);