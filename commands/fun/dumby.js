const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
  name: "dumb",
  aliases: ["dumby"],
  execute: async(client, message, args) => {
const embed1 = new Discord.MessageEmbed()
.setDescription("Estoy recibiendo datos de Tu tonto Contando")
let broov1 = db.fetch(`broov_${message.member.id}`);
const embed = new Discord.MessageEmbed()
.addField(`Has dicho tonto`, `${broov1} Veces!!`)
message.channel.send(embed1).then(msg=>{
  msg.edit(embed)
})


}}
module.exports.help = {
    name: "dumb",
    description: "Muestra cuántas veces has dicho tonto",
    usage: "dumb",
    type: "Fun"  
}