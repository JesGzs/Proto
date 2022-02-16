const Discord = require("discord.js");
const { readdirSync } = require("fs");
const db = require("quick.db");

module.exports = {
  name: "bio-reset",
  aliases: ['del-bio', 'biography-del', 'res-bio', 'reset-bio'],
  description: "Shows all available bot commands.",
  execute: async (client, message, args) => {

   db.delete(`biography_${message.author.id}`)
      const aembed = new Discord.MessageEmbed()
   .setDescription(":mag_right:  **Hecho** :mag_right: \n\n **Completamente eliminado de tu bio**")
   
   message.channel.send(aembed);

  }
}