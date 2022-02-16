const Discord = require("discord.js");
const malScraper = require('mal-scraper');

module.exports = {
  name: "animesearch",
  aliases: ["asearch"],
  execute: async(client, message, args, data, db) => {

  const search = `${args}`;

  malScraper.getInfoFromName(search)
    .then((data) => {
    const malEmbed = new Discord.MessageEmbed()
      .setAuthor(`Resultado de la búsqueda de My Anime List para ${args}`.split(',').join(' '))
      .setThumbnail(data.picture)
      .setColor("RANDOM")
      .addField('Título en inglés', data.englishTitle)
      .addField('Título japonés', data.japaneseTitle)
      .addField('Tipo', data.type)
      .addField('Episodios', data.episodes)
      .addField('Clasificación', data.rating)
      .addField('Ventiló', data.aired)
      .addField('Puntuación', data.score)
      .addField('Estadísticas de puntuación', data.scoreStats)
      .addField('Link', data.url);

      message.channel.send(malEmbed);

    }).catch((err) => message.channel.send({embed: {
                color: 16734039,
                description: "¡Introduzca un nombre válido!"
            }}));

}
}
module.exports.help = {
    name: "animesearch",
    description: "Search for anime",
    usage: "animesearch <name>",
    type: "Fun"  
}

