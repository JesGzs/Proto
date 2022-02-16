const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

    module.exports = {
  name: "weekly",
  aliases: [],
  execute: async(client, message) => {

  let user = message.author;
  let timeout = 604800000;
  let amount = 500;
    
     
  let weekly = await db.fetch(`weekly_${message.author.id}`);

  if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
    let time = ms(timeout - (Date.now() - weekly));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor(16734039)
    .setDescription(`:x: Ya has recogido tu recompensa semanal\n\nRecógela de nuevo en ${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s `);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`:white_check_mark: Has recogido tu recompensa semanal de ${amount} coins`);
  message.channel.send(moneyEmbed)
  db.add(`money_${message.author.id}`, amount)
  db.set(`weekly_${message.author.id}`, Date.now())


  }
}}


module.exports.help = {
    name: "weekly",
    description: "Get a weekly money",
    usage: "weekly",
    type: "Economy"  
}