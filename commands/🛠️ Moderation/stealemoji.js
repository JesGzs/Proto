const Discord = require("discord.js");
const { parse } = require("twemoji-parser");
const Color = `RANDOM`;
module.exports = {
  name: "stealemoji",
  aliases: ["steal", "addemoji"],
  execute: async(client, message, args, data, db) => {
if (!message.member.hasPermission(`MANAGE_EMOJIS`)) {
      return message.channel.send(`¡No tienes permiso para usar este comando! Administrar emojis`)
    }
    
     const name = args[0];
    
if (name.includes("https://") || name.includes(":")) {

  
    message.channel.send("Dame un nombre emoji para guardar con él");
    return;
  }
    const emoji = args[1];
    if (!emoji) return message.channel.send(`Por favor dame un emoji!`);

    let customemoji = Discord.Util.parseEmoji(emoji);
    if(message.content.includes("https://"))
    {
      var Link = args[1];
    }
    if (!message.content.includes("https://")) {
      var Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${
        customemoji.animated ? "gif" : "png"
      }`;
    }
    
   
     
      message.guild.emojis.create(
        `${Link}`,
        `${name}`
      ); 
      const Added = new Discord.MessageEmbed()
        .setTitle(`Emoji añadido`)
        .setColor(`${Color}`)
        .setDescription(
          `Se ha añadido emoji! | Nombre : ${name} | Vista : [Click Me](${Link})`)
        .setFooter(`Si el emoji no se carga, significa que el tamaño del emoji que intentó cargar es superior a 256,0 KB `);
      return message.channel.send(Added);
   
  }
}
  module.exports.help = {
    name: "stealemoji",
    description: "It will steal the given emoji",
    usage: "stealemoji <emoji>",
    type: "Moderation" 
}