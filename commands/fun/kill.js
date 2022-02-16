const Discord = module.require("discord.js");
var deaths = [
  "[NAME1] atropelló [NAME2] con un autobús escolar! :bus:",
  "[NAME1] barra de caramelo envenenada [NAME2]",
  "[NAME2] se tragó una granada",
  "[NAME1] envió a John Wick a matar [NAME2]!",
  "[NAME1] presionó Ctrl + Alt + Supr eliminando [NAME2] del Universo!",
  "[NAME1] lanzó el martillo de prohibición a [NAME2] por enviar spam",
  "[NAME2] pisó un ladrillo de lego"
];


module.exports = {
  name: "kill",
  aliases: [],
  execute: async(client, message, args, data, db) => {
    let member = await message.mentions.members.first();

    if (!member) {
        return message.channel.send({embed: {
            color: 16734039,
            description: "Mencione un miembro válido de este servidor!"
        }})
    }

		if (message.author === member) {
           return await message.channel.send({embed: {
                color: 16734039,
                description: "No puedes patearte a ti mismo!"
            }})
		}
    var pickeddeath = deaths[Math.floor(Math.random()*deaths.length)];
    var change1 = pickeddeath.replace("[NAME1]", message.author.username);
    var change2 = change1.replace("[NAME2]", member.displayName);
  
    await message.channel.send({embed: {
        color: 16734039,
        author: {
          name: "Lápida de" + member.displayName + "!",
          icon_url: member.user.displayAvatarURL
        },
        title: "Causa de muerte",    
        description: change2
    }});
}
}
module.exports.help = {
    name: "kill",
    description: "Asesina a un usuario",
    usage: "kill <user>",
    type: "Fun" 
}