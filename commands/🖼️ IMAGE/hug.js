const Discord = require("discord.js");
const superagent = require("snekfetch");

      module.exports = {
  name: "hug",
  aliases: [],
  execute: async(client, message, args, data, db) => {
            const user = message.mentions.users.first();
            if(!user)
                return message.channel.send({embed: {
                color: 16734039,
                description: "Debes mencionar a alguien para dar un abrazo.!"
            }})
		if (message.author === user) {
           return await message.channel.send({embed: {
                color: 16734039,
                description: "No puedes abrazarte a ti mismo!"
            }})
		}
            superagent.get('https://nekos.life/api/v2/img/hug')
                .end((err, response) => {
              const embed = new Discord.MessageEmbed()
              .setTitle(user.username + " Acabo de recibir un abrazo de " + message.author.username)
              .setImage(response.body.url)
              .setColor("RANDOM")
              .setDescription((user.toString() + " recibió un abrazo de " + message.author.toString()))
              .setFooter(`este es tan lindo`)
              .setURL(response.body.url);
          message.channel.send(embed);
            }).catch((err) => message.channel.send({embed: {
                color: 16734039,
                description: "Algo salió mal... :cry:"
            }}));

        }
      }
module.exports.help = {
    name: "hug",
    description: "Give hug to mentioned user",
    usage: "hug <user>",
    type: "Fun" 
}