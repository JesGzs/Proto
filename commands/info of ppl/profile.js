const Discord = require("discord.js");
const { readdirSync } = require("fs");
const db = require("quick.db");

module.exports = {
  name: "profile",
  aliases: ['pr', 'infopr'],
  description: "Shows all available bot commands.",
  execute: async (client, message, args) => {
     var user = message.mentions.members.first() || message.author;

  let money = await db.fetch(`money_${message.author.id}`)
  if (money === null) money = 0;

  let bank = await db.fetch(`bank_${message.author.id}`)
  if (bank === null) bank = 0;

  let vip = await db.fetch(`bronze_${message.author.id}`)
    if(vip === null) vip = 'None'
    if(vip === true) vip = 'Bronze'

  let shoes = await db.fetch(`nikes_${message.author.id}`)
  if(shoes === null) shoes = '0'

  let newcar = await db.fetch(`car_${message.author.id}`)
  if(newcar === null) newcar = '0'

  let newhouse = await db.fetch(`house_${message.author.id}`)
  if(newhouse === null) newhouse = '0'
var user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
if(args[0])
{
var checking = db.fetch(`birthdate_${user.id}`);
} else {
  var checking = db.fetch(`birthdate_${message.author.id}`);
}
if(!checking){
  var checking = "No hay cumpleaños establecido";
}
if(args[0])
{
var bio = db.fetch(`biography_${user.id}`);
} else {
  var bio = db.fetch(`biography_${message.author.id}`);
}
if(!bio){
  var bio = "No se a establecido biografia";
}
  let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`**Perfil de ${user}**\n\nPocket: ${money}\nBanco: ${bank}\nVIP Rank: ${vip}\n\n**Inventario**\n\nNikes: ${shoes}\nCarros: ${newcar}\nMansiones: ${newhouse}\n\n **Informacion de la persona**\n\n Cumpleaños: ${checking}\n Bio: ${bio}`);
  message.channel.send(moneyEmbed)


  }
}
module.exports.help = {
    name: "profile",
    description: "Display a user profile",
    usage: "profile <mention>",
    type: "Economy"  
}