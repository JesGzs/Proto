const Discord = require("discord.js");
const db = require("quick.db");
const { get } = require('../../cc_list_test/sqlite.js')
module.exports = {
  name: "cc-delete",
  aliases: ["delete-cc", "cc-del", "del-cc"],
  execute: async(client, message, args, data) => {
 if(!message.member.hasPermission('ADMINISTRATOR')) return;

        var name = args[0].toLowerCase();

        if(!name) 
        {
                var errembed = new Discord.MessageEmbed()
    .setDescription(":x:  **Fallo** :x:")
    .addField("Error:", `No me dio un nombre de su comando personalizado para eliminar`)
     return message.channel.send(errembed)
        }
        let todel = db.fetch(`${args[0]}_${message.guild.id}`)
        if(!todel){
                var errembed = new Discord.MessageEmbed()
    .setDescription(":x:  **Fallo** :x:")
    .addField("Error:", `Ese Comando No Existio`)
     return message.channel.send(errembed)
        }
             
        const aembed = new Discord.MessageEmbed()
   .setDescription(":white_check_mark:  **Completado** :white_check_mark:")
   .addField("Nombre de comando personalizado para eliminar:", name)
   .addField("Respuesta de comando personalizado/Respuesta a eliminar:", todel)
   message.channel.send(aembed);
       data.logs.shift(`Command Name - ${name} Command Response - ${todel}`)
        db.subtract(`cccount_${message.guild.id}`, 1)
          db.set(`logs_${message.guild.id}`, data.logs)
    db.delete(`${name}_${message.guild.id}`);


  }
}