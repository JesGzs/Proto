const Discord = module.require("discord.js");
const fs = require("fs");

module.exports = {
  name: "serverinfo",
  aliases: [],
  execute: async(client, message, args, data, db) => {
    // If the message is in a server
    if (message.guild) {
      let admins = "";
      message.guild.members.cache.array().forEach(member => {
        if (member.hasPermission("ADMINISTRATOR")) {
          admins += member.displayName + ", ";
        }
      });
      admins = admins.slice(0, admins.lastIndexOf(","));
  
      const embed = {
        embed: {
          color: 3447003,
          title: message.guild.name,
          thumbnail: {
            url: message.guild.iconURL()
          },
          fields: [
             {
               name: "Dueño",
               value: `${message.guild.owner}`
            },            

            {
              name: "Administradores",
              value: admins
            },
            {
              name: "Fecha de creacion",
              value: `${message.guild.createdAt.toDateString()} at ${message.guild.createdAt.toTimeString()}`
            },
            {
              name: "Número de canales",
              value: message.guild.channels.cache.size
            },
            {
              name: "Numero de usuarios",
              // Filter the members list to only include non-bots
              value: message.guild.members.cache.filter(member => !member.user.bot)
                .size
            },
            {
              name: "Numero de bots",
              // Filter the list to only include bots
              value: message.guild.members.cache.filter(member => member.user.bot)
                .size
            },
{
name: "Lista de emojis", 
value: `${message.guild.emojis.cache.size}`
},
{
name: "Numero de roles", 
value: `${message.guild.roles.cache.size}`
}
          ],
          timestamp: new Date(),
          footer: {
            text: `ID: ${message.guild.id}`
          }
        }
      };
      return message.channel.send(embed);
    }
    else {
      // The message was sent in a DM, can't retrieve the server info
      return message.reply(
        "Parece que no enviaste este mensaje desde un servidor"
      );
    }
  }
}

module.exports.help = {
    name: "serverinfo",
    description: "Grabs the server info",
    usage: "serverinfo",
    type: "Utility"
}
