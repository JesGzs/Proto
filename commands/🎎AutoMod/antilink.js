const db = require("quick.db");
const Discord = require("discord.js")
module.exports = {
  name: "antilink",
  aliases: ["anti-link"],
  execute: async(client, message, args) => {
     let embed = db.fetch(`embed_${message.guild.id}`);
    
    if (!message.member.hasPermission("MANAGE_GUILD"))
    {
       message.channel.send(
        "Nesesitas `MANAGE GUILD` para acceder a este comando!"
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
      message.channel.send(`No me diste una opción de encendido o apagado, por ejemplo - ${prefix}antienlace on/off`);
      return;
    }
    if (content.toLowerCase() === "on") 
    {
       let antilink1 = db.fetch(`antilink_${message.guild.id}`);
      if(antilink1 == "on")
      {
        message.channel.send("Ya has activado el antienlace");
        return;
      }
      let on1 = "on";
      db.set(`antilink_${message.guild.id}`, on1);
      message.channel.send("Ok, ahora eliminaré el mensaje cuando alguien envíe el enlace en el chat.");
    }
     else if (content.toLowerCase() === "off") 
    {
        let antilink1 = db.fetch(`antilink_${message.guild.id}`);
      if(antilink1 == "off")
      {
        message.channel.send("Ya has desactivado el antienlace");
        return;
      }
      let off1 = "off";
      db.set(`antilink_${message.guild.id}`, off1);
      message.channel.send("Ok, ahora no eliminaré el mensaje cuando alguien envíe el enlace en el chat.s");
    }
    else {
      return message.reply("No me tenías encendido o apagado");
    }
    }
}
     module.exports.help = {
    name: "antilink",
    description: "Habilitará el sistema anti link.",
    usage: "antilink <on/off>",
    type: "Moderation"
}
