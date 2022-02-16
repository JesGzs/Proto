const db = require("quick.db");
const sourcebin = require('sourcebin_js');
const Discord = require("discord.js");
module.exports = {
  name: "open",
  aliases: ["re-open"],
  execute: async(client, message, args) => {
    var prefix =  db.fetch(`guildprefix_${message.guild.id}`);
    if(!prefix)
    {
      var prefix = ".";
    }

if (message.channel.name.includes('ticket-')) {
			const member = message.guild.members.cache.get(message.channel.name.split('ticket-').join(''));
			try {
				message.channel.updateOverwrite(member.user, {
					VIEW_CHANNEL: true,
					SEND_MESSAGES: true,
					ATTACH_FILES: true,
					READ_MESSAGE_HISTORY: true,
				})
					.then(() => {
						message.channel.send(`Reabierto con éxito ${message.channel}`);
					});
			}
			catch (e) {
				return message.channel.send('Ha ocurrido un error. Por favor intente de nuevo!');
			}
		}
		else {
			return message.reply(
				'no puede usar este comando aquí. Utilice este comando en un ticket cerrado.',
			);
		}

}
}
module.exports.help = {
    name: "open",
    description: "Re-open a ticket",
    usage: "open",
    type: "Ticket"  
}