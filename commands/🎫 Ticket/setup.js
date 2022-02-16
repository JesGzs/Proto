const db = require("quick.db");
const sourcebin = require('sourcebin_js');
const Discord = require("discord.js");
module.exports = {
  name: "setup",
  aliases: [],
  execute: async(client, message, args) => {
    const log = message.guild.channels.cache.find(log => log.name === "ticket-box")
  if(log)
  {
    return message.reply("Ya tienes configurada la taquilla")
  }
message.guild.channels.create(`ticket-box`, {
			permissionOverwrites: [
				
			
				{
					id: message.guild.roles.everyone,
					allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
				},
			],
			type: 'text',
		}).then(async channel => {
      const embed = new Discord.MessageEmbed()
      .setTitle(`Ticket Box`)
      .setDescription("Haz `.new` para crear un ticket")
      channel.send(embed);
      let vc1 = "600";
 channel.setRateLimitPerUser(vc1, `Responsible - ${message.member}`);
 db.set(`setuped_${message.guild.id}`, channel.id);
    })
    message.reply("Hecho ahora, solo aceptaré mensajes de boletos del canal de caja de boletos")
  }}