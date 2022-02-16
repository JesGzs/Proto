const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports = {
  name: "foxgirl",
  aliases: [],
  execute: async(client, message, args, data, db) => {
     if (!message.channel.nsfw) {
		message.react('💢');
		return message.channel.send({embed: {
                color: 16734039,
                description: "¡Puedes usar este comando en un canal NSFW!"
            }})
	}
    superagent.get('https://nekos.life/api/v2/img/fox_girl')
        .end((err, response) => {
      const embed = new Discord.MessageEmbed()
      .setTitle(":smirk: Fox girl")
      .setImage(response.body.url)
      .setColor(`RANDOM`)
      .setFooter(`Tags: fox girl`)
      .setURL(response.body.url);
  message.channel.send(embed);
    }).catch((err) => message.channel.send({embed: {
                color: 16734039,
                description: "Algo salió mal... :cry:"
            }}));
	
}
}
module.exports.help = {
    name: "foxgirl",
    description: "Display a random fox girl image/gif",
    usage: "foxgirl",
    type: "NSFW" 
}