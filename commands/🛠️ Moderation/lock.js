const Discord = module.require("discord.js");

module.exports = {
   name: "lock",
   execute: async(client, message, args) => {
   if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
   return message.channel.send("No tienes permisos para hacer esto")
   }
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        deny : ['SEND_MESSAGES'],
     },
    ],);
   const embed = new Discord.MessageEmbed()
   .setTitle("Actualizaciones de canales")
   .setDescription(`🔒 ${message.channel} ah sido lockeado`)
   .setColor("RANDOM");
   await message.channel.send(embed);
   message.delete();
}
}
  module.exports.help = {
    name: "lock",
    description: "It Locks the current channel",
    usage: "lock",
	type: "Moderation"
}
