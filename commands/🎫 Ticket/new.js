const db = require("quick.db");
const sourcebin = require('sourcebin_js');
const Discord = require("discord.js");
const ms = require("ms");
module.exports = {
  name: "new",
  aliases: ["create"],
  execute: async(client, message, args) => {
    let channel3 = await db.fetch(`setuped_${message.guild.id}`);
    if(channel3 == null)
    {
      return message.reply("No ha configurado el sistema de tickets, hágalo haciendo .setup");
    }
    if(channel3 != message.channel.id)
    {
      return message.reply(`Solo puede crear un boleto en el canal de caja de boletos`)
    }
    var prefix =  db.fetch(`guildprefix_${message.guild.id}`);
    if(!prefix)
    {
      var prefix = ".";
    }
   if(message.author.bot){
			return;
		}
 let user = message.author;
       let timeout = "600000";
        var weekly =  db.fetch(`messageem_${message.guild.id}_${user.id}`);
   if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
    let time = ms(timeout - (Date.now() - weekly));
    message.channel.send("No puede Solo puede crear 1 ticket en 1 hora para evitar los tickets de spam")
   } else {

   db.set(`messageem_${message.guild.id}_${user.id}`, Date.now());

 
if(message.guild.channels.cache.find(channel => channel.name === `ticket-${message.author.id}`)) {
			return message.reply('ya tiene un boleto, cierre su boleto existente antes de abrir uno nuevo!');
		}

		message.guild.channels.create(`ticket-${message.author.id}`, {
			permissionOverwrites: [
				{
					id: message.author.id,
					allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
				},
				{
					id: message.guild.roles.everyone,
					deny: ['VIEW_CHANNEL'],
				},
			],
			type: 'text',
		}).then(async channel => {
			message.reply(`¡Has creado un ticket con éxito! Por favor, haga clic en ${channel} para ver tu billete.`);
			channel.send(`Hi ${message.author}, ¡bienvenido a tu billete! Tenga paciencia, estaremos con usted en breve. Si desea cerrar este ticket, ejecute \`${prefix}cerrar\``);
			let logchannel = message.guild.channels.cache.find(channel => channel.name === `ticket-logs`)
			if(logchannel) {
				logchannel.send(`Ticket ${message.author.id} creado. Haga clic en lo siguiente para ver <#${channel.id}>`);
			}
		});
   }
}
}


module.exports.help = {
    name: "new",
    description: "Creará un ticket",
    usage: "new",
    type: "Ticket"  
}