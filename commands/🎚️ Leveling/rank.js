const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  name: "rank",
  aliases: ["r"],
  execute: async(client, message, args) => {
let user = message.mentions.members.first() || message.author.id;

 let messagefetch = db.fetch(`messages_${message.guild.id}_${user}`)
    let levelfetch = db.fetch(`level_${message.guild.id}_${user}`)

    if(messagefetch == null) messagefetch = '0';
    if(levelfetch == null) levelfetch = '0';

    const embed = new Discord.MessageEmbed()
    .setDescription(`${message.author}, Eres nivel: \`${levelfetch}\` & Has enviado: \`${messagefetch}\` Mensajes`)

    message.channel.send(embed)


  }
}
module.exports.help = {
    name: "rank",
    description: "Te da tu Rango de Nivel",
    usage: "rank",
    type: "General"  
}