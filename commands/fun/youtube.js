const Discord = require('discord.js');
const { YTSearcher } = require('ytsearcher');
const cnf = require('../../config.js');

const searcher = new YTSearcher(cnf.api);

    module.exports = {
  name: "youtube",
  aliases: [],
  execute: async(client, message, args, data, db) => {
  try {
    if (!args[0]) return message.channel.send({embed: {
            color: 16734039,
            description: "¡Por favor, introduzca una palabra para buscar!"
        }})
    if(args.join(" ").includes("sex") || args.join(" ").includes("boobs") || args.join(" ").includes("booty"))
    {
      return message.reply("Por favor, no busque NSFW Things");
    }
    let msg = await message.channel.send({embed: {
            color: 16734039,
            description: "🔎 Buscando en Youtube..."
        }})
    
    searcher.search(args.join(' ')).then(info => {
      if (!info.first) {
	  let embed2 = new Discord.MessageEmbed()
      .setDescription("¡No pude encontrar nada en Youtube con tu consulta!")
      .setColor('FF5757');
	   return msg.edit(embed2);
        }
      let embed = new Discord.MessageEmbed()
      .setTitle("🔎 Resultado de la búsqueda de Youtube:")
      .setDescription("`First result:` " + info.first.url + " - " + info.first.title + "\n \`\`\`" + info.first.description + "\`\`\`")
      .setColor('RANDOM');
      msg.edit(embed);
    });

  } catch (err) {
	return message.channel.send({embed: {
            color: 16734039,
            description: "Algo salió mal... :cry:"
        }})
  }
}
    }
module.exports.help = {
    name: "youtube",
    description: "Buscar en youtube",
    usage: "search <word>",
    type: "Fun"  
}