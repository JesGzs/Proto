const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
  name: "deposit",
  aliases: ["dep"],
  execute: async(client, message, args) => {

  let user = message.author;

  let member = db.fetch(`money_${message.author.id}`)
  let member2 = db.fetch(`bank_${message.author.id}`)

if(isNaN(args[0])) {
    return message.channel.send({embed: {
     color: 16734039,
     description: `Debe proporcionar un número para depositar dinero!`
     }})
}
	
  if (args[0] == 'all' || args[0] == 'max') {
    let money = await db.fetch(`money_${message.author.id}`)
    let bank = await db.fetch(`bank_${message.author.id}`)

    let embedbank = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(":x: No tienes dinero para depositar")

    if(money === 0) return message.channel.send(embedbank)

    db.add(`bank_${message.author.id}`, money)
    db.subtract(`money_${message.author.id}`, money)
    let embed5 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`:white_check_mark:  Has depositado todas tus monedas en tu banco.`);
  message.channel.send(embed5)
  
  } else {
  
  let embed2 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`:x: Especifique una cantidad a depositar`);
  
  if (!args[0]) {
      return message.channel.send(embed2)
      .catch(err => console.log(err))
  }
  let embed3 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`:x: No puedes depositar dinero negativo`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`:x: no tienes tanto dinero`);

  if (member < args[0]) {
      return message.channel.send(embed4)
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`:white_check_mark:  has depositado ${args[0]} coins EN EL banco`);

  message.channel.send(embed5)
  db.add(`bank_${message.author.id}`, args[0])
  db.subtract(`money_${message.author.id}`, args[0])
  }
}
}
module.exports.help = {
    name: "deposit",
    description: "Deposit money to bank",
    usage: "deposit <money>",
    type: "Economy"  
}
