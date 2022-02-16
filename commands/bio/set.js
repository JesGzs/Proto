const Discord = require("discord.js");
const { readdirSync } = require("fs");
const db = require("quick.db");

module.exports = {
  name: "bio-set",
  aliases: ['set-bio', 'biography-set'],
  description: "Shows all available bot commands.",
  execute: async (client, message, args) => {
   let tosave = args.join(" ");
   if(!args[0]){
     var errembed = new Discord.MessageEmbed()
    .setDescription(":mag_right:  **Fallado** :mag_right: ")
    .addField("Error:", `No me diste una biografía para configurar`)
     return message.channel.send(errembed)
   }
   if(tosave.length > 40) {
       var errembed = new Discord.MessageEmbed()
    .setDescription(":mag_right:  **Fallado** :mag_right: ")
    .addField("Error:", `Tu biografía es demasiado larga. No permitimos más de 40 caracteres en la biografía`)
     return message.channel.send(errembed)
   }
   db.set(`biography_${message.author.id}`, tosave);

   const aembed = new Discord.MessageEmbed()
   .setDescription(":mag_right:  **Completado** :mag_right: ")
   .addField("Bio puesta a:", tosave)
   message.channel.send(aembed);

  }
}