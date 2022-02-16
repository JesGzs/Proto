const db = require("quick.db");
const Discord = require("discord.js")
module.exports = {
  name: "anti-alt",
  aliases: ["antialt"],
  execute: async(client, message, args) => {
       if (!message.member.hasPermission("MANAGE_GUILD"))
    {
       message.channel.send(
        "Nesesitas `MANAGE GUILD` para acceder a este comando!"
      );
      return;
}
 var wchannel = args[0];
 if(!wchannel)
 {
   return message.reply("Por favor dame habilitar o deshabilitar")
 }
 if(wchannel == "enable")
 {
   db.set(`antialt_${message.guild.id}`, wchannel);
   message.reply(`OK ahora anti-alt está habilitado`);
   return;
 }
 else if(wchannel == "disable")
 {
   db.delete(`antialt_${message.guild.id}`);
   message.reply(`OK ahora anti-alt está deshabilitado`);
   return;
 }else {
 return message.reply("No ingresaste habilitar o deshabilitar")
 }


  }
}