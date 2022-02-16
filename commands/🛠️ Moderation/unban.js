const Discord = require("discord.js");

    module.exports = {
  name: "unban",
  aliases: [],
  execute: async(client, message, args, data, db) => {
  if (!message.member.hasPermission("BAN_MEMBERS"))
     {
      return;
    }
    const reason = args.slice(1).join(' ');
    client.unbanReason = reason;
    client.unbanAuth = message.author;

    const user = args[0];

    if (reason.length < 1) {
		return message.channel.send({embed: {
                    color: 16734039,
                    description: "Debes proporcionar un motivo para el desbaneo."
                }})
	} else if (!user) {
		return message.channel.send({embed: {
                    color: 16734039,
                    description: "Debe proporcionar una resolución de usuario, como una identificación de usuario."
                }})
	}
    message.guild.unban(user);
		message.channel.send({embed: {
                    color: 16734039,
                    description: "El usuario ha sido desbaneado! :scream:"
                }})
  }

    }		
module.exports.help = {
  name: "unban",
  description: "Unbans the user.",
  usage: "unban <mention> <reason>",
  type: "Moderation"
}