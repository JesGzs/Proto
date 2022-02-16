var figlet = require('figlet');
const Discord = require('discord.js')

module.exports = {
  name: "ascii",
  aliases: ["convert"],
  execute: async(client, message, args, data, db) => {

  var maxLen = 50

  if(args.join(' ').length > maxLen) return message.channel.send({embed: {
                color: 16734039,
                description: "La longitud máxima es " + `${maxLen}` + " !"
            }})

  if(!args[0])return message.channel.send({embed: {
                color: 16734039,
                description: "¡Introduce un texto para convertir!"
            }})

  figlet(`${args.join(' ')}`, function(err, data) {
      if (err) {
return message.channel.send({embed: {
                color: 16734039,
                description: "Algo salió mal... :cry:"
            }})
      }
      message.channel.send(`${data}`, {code: 'AsciiArt'});
  });


}
}
module.exports.help = {
    name: "ascii",
    description: "Convert text to asci format",
    usage: "ascii <text>",
    type: "Fun" 
}