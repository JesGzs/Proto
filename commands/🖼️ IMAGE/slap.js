const Discord = require("discord.js");
const superagent = require("snekfetch");
module.exports = {
  name: "slap",
  aliases: [],
  execute: async(client, message, args, data, db) => {

            const user = message.mentions.users.first();
            if(!user) return message.channel.send({embed: {
                color: 16734039,
                description: "Debes mencionar a alguien para abofetear!"
            }});

		if (message.author === user) {
           return await message.channel.send({embed: {
                color: 16734039,
                description: "no puedes abofetearte a ti mismo!"
            }})
		}
            superagent.get('https://nekos.life/api/v2/img/slap')
                .end((err, response) => {
              const embed = new Discord.MessageEmbed()
              .setTitle(user.username + " acaba de ser abofeteado " + message.author.username)
              .setImage(response.body.url)
              .setColor(`RANDOM`)
              .setDescription((user.toString() + " fue abofeteado por " + message.author.toString()))
              .setFooter(`Eso debe doler ._.`)
              .setURL(response.body.url);
          message.channel.send(embed);
            }).catch((err) => message.channel.send({embed: {
                color: 16734039,
                description: "Algo salió mal... :cry:"
            }}));

        }
}
module.exports.help = {
    name: "slap",
    description: "Slap a user",
    usage: "slap <user>",
    type: "Fun" 
}