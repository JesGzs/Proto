const Discord = require("discord.js");
const cnf = require('../../config.js');

module.exports = {
  name: "poll",
  aliases: ["pregunta"],
  execute: async(client, message, args, data, db) => {

const pollmessage = await args.join(" ");


var pollrandom = ["✅", "❌",];  

if (pollmessage.length <= 0) return message.channel.send({embed: {
            color: 16734039,
            description: "¡Debe proporcionar un texto para hacer una pregunta!"
        }})
const embed = new Discord.MessageEmbed()
.setTitle(":ballot_box: " +`${message.author.username}` + " ¡Ha comenzado una votación! ¡Reacciona con los emojis para votar! :ballot_box:",)
.setColor("RANDOM")
.addField("Poll", pollmessage,)
.setFooter("Nota: ¡La votación finalizará en 30 segundos! • Bot creado por " + `HECTORT19`,)
.setTimestamp()
const pollTopic = await message.channel.send({embed})
await pollTopic.react(`✅`);
await pollTopic.react(`❌`);
// Create a reaction collector
const filter = (reaction) => reaction.emoji.name === '✅';
const collector = pollTopic.createReactionCollector(filter, { time: 30000 });
collector.on('end', collected => message.channel.send({embed: {
            color: 3447003,
            title: ":tada: Collected " + `${collected.size}` + " ¡votos positivos! :tada:",
			description: "My answer is: " + pollrandom[Math.floor(Math.random()*pollrandom.length)] + ", pero tengo miedo de votar."
        }})
);
}
}
module.exports.help = {
    name: "poll",
    description: "Crear una encuesta",
    usage: "poll <poll1> <poll2>",
    type: "Fun"  
}