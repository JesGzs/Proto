const Discord = require("discord.js");
const db = require("quick.db");


module.exports = {
  name: "addmoney",
  aliases: ["addm"],
  execute: async(client, message, args) => {
      var prefix =  db.fetch(`guildprefix_${message.guild.id}`);
    if(!prefix)
    {
      var prefix = ".";
    }

if(message.author.id == "720632216236851260" || message.author.id == "780029934163722280") {
  let user = message.mentions.members.first();

if (!user) return message.channel.send({embed: {
                    color: 16734039,
                    description: "Debes mencionar a alguien para agregar dinero!"
                }})
    if (isNaN(args[1])) return message.channel.send({embed: {
                    color: 16734039,
                    description: "¡Debes ingresar la cantidad de dinero a agregar!"
                }})
                if(args[0] >= 20000)
                {
   message.reply("No puedes agregar una cantidad mucho más")
   return;
                }

    db.add(`money_${message.author.id}`, args[1])
    let bal = await db.fetch(`money_${message.author.id}`)

    let moneyEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`:white_check_mark: : Añadido ${args[1]} monedas\n\nNuevo balance: ${bal}`);
    message.channel.send(moneyEmbed)
    } else {
	message.channel.send({embed: {
                    color: 16734039,
                    description: "No tienes permiso para agregar dinero!"
                }})
	}
}
}
module.exports.help = {
    name: "addmoney",
    description: "Give money to mentioned user",
    usage: "addmoney <user> <money>",
    type: "Economy"  
}