const Discord = require('discord.js')
const cooldown = new Set()

module.exports = {
  name: "ratewaifu",
  aliases: [],
  execute: async(client, message, args, data, db) => {

  if (cooldown.has(message.author.id)) {
    let cooldownemb = new Discord.MessageEmbed()
    .setAuthor(`${message.author.username} Cooldown..`, message.author.displayAvatarURL)
    .setDescription(`¡Tienes que esperar 5 segundos!`)
    .setColor(`RED`)
    .setFooter(`Este mensaje se eliminará en 5 segundos.`)
    return message.channel.send(cooldownemb).then(message => {
     message.delete(5000) 
    })

    }
    cooldown.add(message.author.id);

    setTimeout(() => {
        cooldown.delete(message.author.id);
    }, 10000);
 let m421 = args.join(" ");
  if (!m421) return  message.channel.send({embed: {
                color: 16734039,
                description: "¡Por favor, introduzca un nombre waifu!"
            }})
  if (m421.length > 30) return  message.channel.send({embed: {
                color: 16734039,
                title: "No puedo calificar tu waifu. La longitud máxima del nombre es 30"
            }})
  let result = Math.floor((Math.random() * 100) + 0);

    const happyrate = new Discord.MessageEmbed()
  .setDescription(`Yo calificaría **${m421}** ${result}/100 ?`)
  .setColor(`GREEN`)

      const sadembed = new Discord.MessageEmbed()
  .setDescription(`Yo calificaría **${m421}** ${result}/100 ??`)
  .setColor(`GREEN`)

        const idkembed = new Discord.MessageEmbed()
  .setDescription(`Yo calificaría **${m421}** ${result}/100 ??`)
  .setColor(`GREEN`)

      const shrugembed = new Discord.MessageEmbed()
  .setDescription(`Yo calificaría **${m421}** ${result}/100 ??`)
  .setColor(`GREEN`)

          const okembed = new Discord.MessageEmbed()
  .setDescription(`Yo calificaríae **${m421}** ${result}/100 ??`)
  .setColor(`GREEN`)

const thumbupembed = new Discord.MessageEmbed()
  .setDescription(`Yo calificaría **${m421}** ${result}/100 ??`)
  .setColor(`GREEN`)

const eyesembed = new Discord.MessageEmbed()
  .setDescription(`Yo calificaría **${m421}** ${result}/100 ??`)
  .setColor(`GREEN`)

  if (result > 90) return message.channel.send(happyrate)
  if (result < 30) return message.channel.send(sadembed)
  if (result > 40) return message.channel.send(idkembed)
  if (result > 50) return message.channel.send(shrugembed)
  if (result > 60) return message.channel.send(okembed)
  if (result > 70) return message.channel.send(thumbupembed)
  if (result > 80) return message.channel.send(eyesembed)
} 
}
module.exports.help = {
    name: "ratewaifu",
    description: "Califica un waifu",
    usage: "ratewaifu <name> <points>",
    type: "Fun" 
}