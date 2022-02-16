const Discord = require("discord.js");
const superagent = require("snekfetch");

        module.exports = {
  name: "tickle",
  aliases: [],
  execute: async(client, message, args, data, db) => {

            const user = message.mentions.users.first();
            if(!user)
                return message.channel.send({embed: {
                color: 16734039,
                description: "Debes mencionar a alguien para hacerle cosquillas.!"
            }});
		if (message.author === user) {
           return await message.channel.send({embed: {
                color: 16734039,
                description: "no puedes hacerte cosquillas!"
            }})
		}
            superagent.get('https://nekos.life/api/v2/img/tickle')
                .end((err, response) => {
              const embed = new Discord.MessageEmbed()
              .setTitle(user.username + " me acaba de hacer cosquillas " + message.author.username)
              .setImage(response.body.url)
              .setColor(`RANDOM`)
              .setDescription((user.toString() + " me hizo cosquillas " + message.author.toString()))
              .setFooter(`._.`)
              .setURL(response.body.url);
          message.channel.send(embed);
            }).catch((err) => message.channel.send({embed: {
                color: 16734039,
                description: "Algo salió mal... :cry:"
            }}));

        }
        }
module.exports.help = {
    name: "tickle",
    description: "Tickle a user",
    usage: "tickle <user>",
    type: "Fun"  
}

