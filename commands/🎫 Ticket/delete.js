const db = require("quick.db");
const sourcebin = require('sourcebin_js');
const Discord = require("discord.js");
module.exports = {
  name: "delete",
  aliases: ["nikal"],
  execute: async(client, message, args) => {
     if (!message.member.hasPermission("MANAGE_SERVER")) {
       return;
     }
    var prefix =  db.fetch(`guildprefix_${message.guild.id}`);
    if(!prefix)
    {
      var prefix = ".";
    }

if(message.channel.name.includes('ticket-')) {
			message.channel.delete();
		}
		else {
			return message.reply('no puede usar este comando aquí. Utilice este comando cuando desee eliminar un ticket.');
		}

}
}
module.exports.help = {
    name: "delete",
    description: "Borrará a la fuerza el canal de tickets.",
    usage: "delete",
    type: "Ticket"  
}