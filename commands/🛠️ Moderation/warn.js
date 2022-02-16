const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./json db/warnings.json", "utf8"));
const db = require("quick.db")
    module.exports = {
  name: "warn",
  aliases: ["strike"],
  execute: async(client, message, args) => {

  //!warn @daeshan <reason>
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send({embed: {
            color: 16734039,
            description: "No tienes permiso para advertir a los miembros!"
        }})
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0])
  if(!wUser) return message.channel.send({embed: {
            color: 16734039,
            description: "No puedo encontrar al usuario!"
        }})
  if(wUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send({embed: {
            color: 16734039,
            description: "No puedo advertir a este usuario!"
        }})
  let reason = args.join(" ");

  if (!reason) return message.channel.send({embed: {
            color: 16734039,
            description: "Introduce un motivo!"
        }})
  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

  let warnEmbed = new Discord.MessageEmbed()
  .setTitle("Warns")
  .setColor("RANDOM")
  .addField("Usuario Warn:", `<@${wUser.id}>`)
  .addField("Warn en :", message.channel)
  .addField("Numero de warns:", warns[wUser.id].warns)
  .addField("Razon:", reason)
  .setTimestamp()
  message.channel.send(warnEmbed);
}
  }
module.exports.help = {
    name: "warn",
    description: "Warn a user",
    usage: "warn <user> <channel>",
    type: "Moderation"
}