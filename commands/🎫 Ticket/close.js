const db = require("quick.db");
const sourcebin = require('sourcebin_js');
const Discord = require("discord.js");
module.exports = {
  name: "close",
  aliases: [],
  execute: async(client, message, args) => {
    var prefix =  db.fetch(`guildprefix_${message.guild.id}`);
    if(!prefix)
    {
      var prefix = ".";
    }

if(message.channel.name.includes('ticket-')) {
			const member = message.guild.members.cache.get(message.channel.name.split('ticket-').join(''));
			if(message.member.hasPermission('ADMINISTRATOR') || message.channel.name === `ticket-${message.author.id}`) {
				message.channel.messages.fetch().then(async (messages) => {
					const output = messages.array().reverse().map(m => `${new Date(m.createdAt).toLocaleString('en-US')} - ${m.author.tag}: ${m.attachments.size > 0 ? m.attachments.first().proxyURL : m.content}`).join('\n');

					let response;
					try {
						response = await sourcebin.create([
							{
								name: ' ',
								content: output,
								languageId: 'text',
							},
						], {
							title: `Chat transcript for ${message.channel.name}`,
							description: ' ',
						});
					}
					catch(e) {
						return message.channel.send('Ha ocurrido un error. Por favor intente de nuevo!');
					}

					const embed = new Discord.MessageEmbed()
						.setDescription(`[\`📄 View\`](${response.url})`)
						.setColor('GREEN');
					member.send('Aquí hay una transcripción de su boleto, haga clic en el enlace a continuación para ver la transcripción', embed);
				}).then(() => {
					try {
						message.channel.updateOverwrite(member.user, {
							VIEW_CHANNEL: false,
							SEND_MESSAGES: false,
							ATTACH_FILES: false,
							READ_MESSAGE_HISTORY: false,
						}).then(() => {
							message.channel.send(`Cerrado exitosamente ${message.channel}`);
						});
					}
					catch(e) {
						return message.channel.send('Ha ocurrido un error. Por favor intente de nuevo!');
					}
				});
			}
		}
		else {
			return message.reply('no puede usar este comando aquí. Utilice este comando cuando esté cerrando un ticket.');
		}

}
}
module.exports.help = {
    name: "close",
    description: "Cerrará el ticket del ticket",
    usage: "close",
    type: "Ticket"  
}