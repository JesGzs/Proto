const db = require("quick.db");
const Discord = require("discord.js")
module.exports = {
  name: "hide",
  aliases: [],
  execute: async(client, message, args) => {
    
     let embed = db.fetch(`embed_${message.guild.id}`);
    
    if (!message.member.hasPermission("MANAGE_GUILD"))
    {
      message.channel.send(
        "Nesesitas `MANAGE GUILD` para configurar esto!"
      );
      return;
      }
    let content = args[0];
  
    var prefix =  db.fetch(`guildprefix_${message.guild.id}`);
    if(!prefix)
    {
      var prefix = ".";
    }
   message.channel.overwritePermissions([
  {
     id: message.guild.roles.everyone.id,
     deny: ['VIEW_CHANNEL'],
  },
], `${message.member.id} Le dijeron que bloqueara el servidor`);
message.channel.send("Listo, he ocultado este canal ahora :thumbsup:")

    
}}
module.exports.help = {
    name: "hide",
    description: "It hide the currrent channel",
    usage: "hide",
    type: "Moderation"   
}