const db = require("quick.db");
const Discord = require("discord.js")
module.exports = {
  name: "autorole",
  aliases: ["ar", "auto-role"],
  execute: async(client, message, args) => {
     if (message.member.hasPermission("MANAGE_SERVER")) {
      if (message.content.includes("@everyone")) {
        return message.reply("Everyone is already automatically given by discord");
      }
    
if(!args[0])
{
  return message.reply("Oye, no me diste un rol para agregar cuando un miembro se une al servidor");
}
  var role1 = message.mentions.roles.first().id;
    if(!role1)
    {
      var role1 = args[0];
    }
if(args[0] == "disable" || args[0] == "off")
{
 
  db.delete(`autorole_${message.guild.id}`);
  return message.reply("Listo, tengo el rol automático deshabilitado en su servidor, habilítelo agregando cualquier rol ");
}
else {
message.reply(`Ok, ahora daré este rol cuando alguien se una a este rol de servidor - ${role1}`)
db.set(`autorole_${message.guild.id}`, role1);
}
     }
  }
}
module.exports.help = {
    name: "autorole",
    description: "Configuró su rol de servidor para dar si algún miembro se unió",
    usage: "autorole",
    type: "Moderation"
}