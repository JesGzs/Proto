const Discord = require("discord.js");
const superagent = require("snekfetch");

  module.exports = {
  name: "kiss",
  aliases: [],
  execute: async(client, message, args, data, db) => {
            const user = message.mentions.users.first();
            if(!user)
                return message.channel.send({embed: {
                color: 16734039,
                description: "Debes mencionar a alguien para besar!"
            }})

		if (message.author === user) {
           return await message.channel.send({embed: {
                color: 16734039,
                description: "No puedes besarte a ti mismo!"
            }})
		}
            superagent.get('https://nekos.life/api/v2/img/kiss')
                .end((err, response) => {
              const embed = new Discord.MessageEmbed()
              .setTitle(user.username + " Acabo de recibir un beso de " + message.author.username)
              .setImage(response.body.url)
              .setColor("RANDOM")
              .setDescription((user.toString() + " recibió un beso de " + message.author.toString()))
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
    name: "kiss",
    description: "Kiss a mentioned user",
    usage: "kiss <user>",
    type: "Fun" 
}