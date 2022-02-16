const db = require("quick.db");
const sourcebin = require('sourcebin_js');
const Discord = require("discord.js");
module.exports = {
  name: "remove",
  aliases: [],
  execute: async(client, message, args, data, db) => {
     if (!message.member.hasPermission("MANAGE_SERVER")) {
       return;
     }
    var prefix =  db.fetch(`guildprefix_${message.guild.id}`);
    if(!prefix)
    {
      var prefix = ".";
    }

if(message.channel.name.includes('ticket-')) {
			const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(' ') || x.user.username === args[0]);
			if(!member) {
				return message.channel.send(`¡Uso incorrecto! Uso Correcto:${prefix}remover <member>`);
			}
			try{
				message.channel.updateOverwrite(member.user, {
					VIEW_CHANNEL: false,
					SEND_MESSAGES: false,
					ATTACH_FILES: false,
					READ_MESSAGE_HISTORY: false,
				}).then(() => {
					message.channel.send(`Eliminado exitosamente ${member} de ${message.channel}`);
				});
			}
			catch(e) {
				return message.channel.send('Ha ocurrido un error. Por favor intente de nuevo!');
			}
		}

}
}
module.exports.help = {
    name: "remove",
    description: "Quitar a una persona de un ticket",
    usage: "remove <mention/user_dev_ID>",
    type: "Ticket"  
}