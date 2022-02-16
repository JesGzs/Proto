const db = require("quick.db");
const Discord = require("discord.js");
module.exports = {
  name: "auto-official-role",
  aliases: ["auto-official", "auto-name-role","anr", "af", "autoofficial"],
  execute: async(client, message, args) => {
     if (!message.member.hasPermission("MANAGE_SERVER")) {
       return;
     }
if(!args[0])
{
  return message.reply("No me diste rol o apodo para configurar\n ejemplo - .anr rol @Officials o .anr nombre RYΠΣX丶");
}
if(args[0] == "role")
{
  var role2 = message.mentions.roles.first();
  if(role2)
  {
    var role2 = message.mentions.roles.first().id;
  }
  else if(!role2){
    var role2 = args[1];
  }
  if(!role2){
    return message.reply("No me diste un rol válido");
  }
  db.set(`tagg_${message.guild.id}`, role2);
  return message.reply("Hecho ahora, le daré este rol cuando alguien agregue su etiqueta dada a su nombre de usuario");
}
if(args[0] == "name")
{
 let name = args[1]; 
 if(!name)
 {
   return message.reply("Proporcione un nombre para establecer el nombre en mi base de datos");
 }
 db.set(`tagn_${message.guild.id}`, name);
 return message.reply("Hecho ahora, daré un rol cuando alguien agregue este nombre a su nombre de usuario");
}
  }
}