const Discord = require("discord.js");
const db = require("quick.db");
module.exports = {
  name: "set-global",
  aliases: ["global-channel", "channel-global"],
  execute: async(client, message, args, data) => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
  if(args[0] == "disable" || db.has(`globalchat_${message.guild.id}`))
  {
    let todel = db.fetch(`globalchat_${message.guild.id}`)
    db.delete(`globalchat_${message.guild.id}`)
    const aembed1 = new Discord.MessageEmbed()
   .setDescription(":eye_in_speech_bubble:  **Exitoso** :eye_in_speech_bubble: ")
   .addField("Canal para eliminar de la base de datos:", `<#${todel}>`)
   message.channel.send(aembed1);
  }
 var wchannel =  message.mentions.channels.first().id || args[0];
 
  if(!args[0])
  {
       var errembed = new Discord.MessageEmbed()
    .setDescription(":x:  **Fallado** :x: ")
    .addField("Error:", `No me has dado un canal`)
     return message.channel.send(errembed)
  }
  if(!message.guild.channels.cache.get(wchannel))
  {
        var errembed = new Discord.MessageEmbed()
    .setDescription(":x:  **Fallado** :x: ")
    .addField("Error:", `No me has dado un canal valido`)
     return message.channel.send(errembed)
  }
   db.set(`globalchat_${message.guild.id}`, wchannel)
           const aembed = new Discord.MessageEmbed()
   .setDescription(":eye_in_speech_bubble:  **Exitoso** :eye_in_speech_bubble: ")
   .addField("Canal para enviar mensajes globales:", `<#${wchannel}>`)
   message.channel.send(aembed);
  }
}
