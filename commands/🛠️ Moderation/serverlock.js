const db = require("quick.db");
const Discord = require("discord.js")
module.exports = {
  name: "serverlock",
  aliases: [],
  execute: async(client, message, args) => {
     let embed = db.fetch(`embed_${message.guild.id}`);
    
    if (!message.member.hasPermission("MANAGE_GUILD"))
    {
      message.channel.send(
        "Nesesitas `MANAGE GUILD` para utlizar este comando!"
      )
      return;
      }
    let content = args[0];
  
    var prefix =  db.fetch(`guildprefix_${message.guild.id}`);
    if(!prefix)
    {
      var prefix = ".";
    }
      if(!content)
    {
      message.channel.send(`No me diste opción de texto o video e.g - ${prefix}serverlock text/vc/all/hide`);
      return;
    }
    if (content.toLowerCase() === "text") 
    {
      message.guild.channels.cache.forEach(ch => 
{
if(ch.type == "text")
 ch.overwritePermissions([
  {
     id: message.guild.roles.everyone.id,
     deny: ['SEND_MESSAGES'],
  },
], `${message.member.id} Told to lock the server`);
}) 
message.channel.send(`Listo, he bloqueado todos los canales de texto que están en el servidor`)
}
if (content.toLowerCase() === "vc") 
    {
        message.guild.channels.cache.forEach(ch => 
{
if(ch.type == "voice")
 ch.overwritePermissions([
  {
     id: message.guild.roles.everyone.id,
     deny: ['CONNECT'],
  },
], `${message.member.id} Le dijeron que bloqueara el servidor`);
}) 
message.channel.send(`Listo, he bloqueado todos los canales de voz que estaban en el servidor`)
    }
     if (content.toLowerCase() === "all") 
    {
        message.guild.channels.cache.forEach(ch => 
{
 ch.overwritePermissions([
  {
     id: message.guild.roles.everyone.id,
     deny: ['CONNECT', 'SEND_MESSAGES'],
  },
], `${message.member.id} Le dijeron que bloqueara el servidor`);
}) 
message.channel.send(`Listo, he bloqueado todos los canales de voz y de TEXTO que estaban en el servidor.`)
    }
       if (content.toLowerCase() === "hide") 
    {
        message.guild.channels.cache.forEach(ch => 
{
 ch.overwritePermissions([
  {
     id: message.guild.roles.everyone.id,
     deny: ['VIEW_CHANNEL'],
  },
], `${message.member.id} Le dijeron que bloqueara el servidor`);
}) 
message.channel.send("Listo, he ocultado todos los canales de voz Y TEXTO que estaban en el servidor.")
    }

}
}
module.exports.help = {
    name: "serverlock",
    description: "It will lock the whole server",
    usage: "serverlock text/vc/all/hide",
    type: "Moderation"   
}