const Discord = require("discord.js");
const db = require("quick.db");
module.exports = {
  name: "set-logs",
  aliases: ["logs-set"],
  execute: async(client, message, args) => {
     if (!message.member.hasPermission("MANAGE_SERVER"))
     {
      return;
    }
message.guild.channels.create('dumb-logs', {
  type: 'text',
  permissionOverwrites: [
     {
       id: message.guild.roles.everyone.id,
       deny: ['VIEW_CHANNEL'],
    },
  ],
})
message.reply("Dome creó un canal llamado dumb-logs y los registros se enviarán allí.");
  }
}