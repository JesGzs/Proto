const Discord = require("discord.js");
const superagent = require("snekfetch");
     
            module.exports = {
  name: "waifu",
  aliases: [],
  execute: async(client, message, args, data, db) => {

            superagent.get('https://nekos.life/api/v2/img/waifu')
                .end((err, response) => {
              const embed = new Discord.MessageEmbed()
              .setDescription(message.author.toString() + " ¡Este es tu waifu!")
              .setImage(response.body.url)
              .setColor(`RANDOM`)
              .setURL(response.body.url);
          message.channel.send(embed);
            }).catch((err) => message.channel.send({embed: {
                color: 16734039,
                description: "Algo salió mal... :cry:"
            }}));
          
        }
            }
module.exports.help = {
    name: "waifu",
    description: "Mostrar un waifu imag aleatorioe",
    usage: "waifu",
    type: "Fun"  
}

