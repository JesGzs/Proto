const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
module.exports = {
  name: "set-channel",
  aliases: ["chatbot", "channel-set"],
  execute: async(client, message, args) => {
    if(!message.member.hasPermission("MANAGE_SERVER"))
{
  return;
} 
if(!message.guild.me.hasPermission("MANAGE_CHANNELS"))
{
  return message.reply("Necesito administrar el permiso del canal para cambiar el modo de siembra del canal");
}

 
  let chatbot = db.fetch(`chatbotc_${message.guild.id}`);



if(!chatbot){
 if(!args[0])
  {
    return message.channel.send("No me diste un canal!!");
  }
  var wchannel =  message.mentions.channels.first().id || args[0];
  var channel2 = message.mentions.channels.first();
  if(!channel2)
  {
    var channel2 = args[0];
    var channel2 = client.channels.cache.get(channel2);
  }
db.set(`chatbotc_${message.guild.id}`, wchannel);
let vc1 = "4";
 channel2.setRateLimitPerUser(vc1, `Responsible - ${message.member}`);
        
return message.reply(`Listo, ahora voy a hablar ${wchannel} y habrá modo lento debido a los límites de velocidad`);
}else {
  return message.reply("Ya tienes un canal de chatbot, primero bórralo de mi comando");
}
  }
  }
