const Discord = require("discord.js");
const db = require("quick.db");
module.exports = {
  name: "cc-create",
  aliases: ["create-cc"],
  execute: async(client, message, args, data) => {

 if(!message.member.hasPermission('ADMINISTRATOR')) return;

       var name = args[0].toLowerCase(); const response = args.slice(1).join(" ");
     if(!name){
           var errembed = new Discord.MessageEmbed()
    .setDescription(":x:  **Fallo** :x: ")
    .addField("Error:", `No me diste el nombre de tu comando personalizado`)
     return message.channel.send(errembed)
     }
     if(!response) {
           var errembed = new Discord.MessageEmbed()
    .setDescription(":x:  **Fallo** :x: ")
    .addField("Error:", `No me diste una respuesta de tu comando personalizado`)
     return message.channel.send(errembed)
     }
     if(db.has(`${name}_${message.guild.id}`)){
         var errembed = new Discord.MessageEmbed()
    .setDescription(":x:  **Fallo** :x: ")
    .addField("Error:", `Este comando ya existe, elimínelo primero para agregar uno nuevo`)
     return message.channel.send(errembed)
     }
     db.set(`${name}_${message.guild.id}`, response);
     db.set(`cc_${name}`, name);
         data.logs.unshift(`Nombre de comando - **${name}** || Respuesta de comando - **${response}**`)
          db.set(`logs_${message.guild.id}`, data.logs)
          db.add(`cccount_${message.guild.id}`, 1)
        const aembed = new Discord.MessageEmbed()
   .setDescription(":mag_right:  **Completado** :mag_right: ")
   .addField("Nombre de comando personalizado para establecer:", name)
   .addField("Respuesta de comando personalizado/Respuesta al conjunto:", response)
   message.channel.send(aembed);
     
  }
}