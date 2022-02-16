const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
  name: "pay",
  aliases: ["give"],
  execute: async(client, message, args) => { 
  let user = message.mentions.members.first() 

  let member = db.fetch(`money_${message.author.id}`)

  let embed1 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`:x: Menciona alguien para pagarle`);

  if (!user) {
      return message.channel.send(embed1)
  }
  let embed2 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`:x: Specifica una cantidad`);
  
  if (!args[1]) {
      return message.channel.send(embed2)
  }

    if (isNaN(args[1])) return message.channel.send({embed: {
                    color: 16734039,
                    description: "Debes ingresar la cantidad de dinero a pagar!"
                }})

  let embed3 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`:x: No puedes pagarle a alguien dinero negativo`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`:x: no tienes tanto dinero`);

  if (member < args[1]) {
      return message.channel.send(embed4)
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`:white_check_mark:  Has pagado ${user.user.username} ${args[1]} monedas`);

  message.channel.send(embed5)
  db.add(`money_${message.author.id}`, args[1])
  db.subtract(`money_${message.author.id}`, args[1])

}
}
module.exports.help = {
    name: "pay",
    description: "Pay money to mentioned user",
    usage: "pay <mention> <money>",
    type: "Economy"  
}
