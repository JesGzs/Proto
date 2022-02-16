const db = require("quick.db");
const Discord = require("discord.js")
module.exports = {
  name: "role-all",
  aliases: ["ra", "all-role"],
  execute: async(client, message, args) => {
     if (message.member.hasPermission("MANAGE_SERVER")) {

    
    var role1 = message.mentions.roles.first().id;
    if(!role1)
    {
      var role1 = args[0];
    }

    let role2 = message.guild.roles.cache.get(`${role1}`);
message.guild.members.cache.forEach(member => member.roles.add(role2))
message.reply("Listo Se ejecutará en segundo plano")

     }
  }
}
module.exports.help = {
    name: "roleall",
    description: "Le da su rol dado a todos los miembros del servidor",
    usage: "roleall",
    type: "Moderation"
}