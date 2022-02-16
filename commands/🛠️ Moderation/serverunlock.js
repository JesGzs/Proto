const db = require("quick.db")
const Discord = require("discord.js")
module.exports = {
  name: "serverunlock",
  aliases: [],
  execute: async(client, message, args) => {
     let embed = db.fetch(`embed_${message.guild.id}`);
    
    if (!message.member.hasPermission("MANAGE_GUILD"))
    {
       message.channel.send(
        "Nesesitas permisos `MANAGE GUILD` para utilizar este comando!"
        
      );
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
      message.channel.send(`No me diste opción de texto o video e.g - ${prefix} serverunlock text/vc/all`);
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
     allow: ['SEND_MESSAGES'],
  },
], `${message.member.id} Me dijeron que desbloqueara el servidor.`);
}) 
message.channel.send(`Listo, he desbloqueado todos los canales de texto que están en el servidor.`)
}
if (content.toLowerCase() === "vc") 
    {
        message.guild.channels.cache.forEach(ch => 
{
if(ch.type == "voice")
 ch.overwritePermissions([
  {
     id: message.guild.roles.everyone.id,
     allow: ['CONNECT'],
  },
], `${message.member.id} Le dijeron que bloqueara el servidor`);
}) 
message.channel.send(`Listo, he desbloqueado todos los canales de voz que estaban en el servidor.`)
    }
    if (content.toLowerCase() === "all") 
    {
        message.guild.channels.cache.forEach(ch => 
{
 ch.overwritePermissions([
  {
     id: message.guild.roles.everyone.id,
     allow: ['CONNECT', 'SEND_MESSAGES'],
  },
], `${message.member.id} Le dijeron que bloqueara el servidor`);
}) 
message.channel.send(`Listo, he desbloqueado todos los canales de voz y TEXTO que estaban en el servidor.`)
    }
      if (content.toLowerCase() === "unhide") 
    {
        message.guild.channels.cache.forEach(ch => 
{
 ch.overwritePermissions([
  {
     id: message.guild.roles.everyone.id,
     allow: ['VIEW_CHANNEL'],
  },
], `${message.member.id} Le dijeron que bloqueara el servidor`);
}) 
message.channel.send(`Listo, he mostrado todos los canales de voz y TEXTO que estaban en el servidor.`)
    }
}
}
module.exports.help = {
    name: "serverunlock",
    description: "It will unlock the whole server",
    usage: "serverunlock text/vc/all/unhide",
    type: "Moderation"   
}