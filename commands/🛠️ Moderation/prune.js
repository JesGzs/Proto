const Discord = module.require("discord.js");

module.exports = {
  name: "prune",
  aliases: [],
  execute: async(client, message, args, data, db) => {
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
        const deleteCount = await parseInt(args[0]);

        if(!deleteCount || deleteCount < 1 || deleteCount > 100) {
            return await message.channel.send({embed: {
                color: 16734039,
                description: "Proporcione un número entre 1 y 100!"
            }})
        }
       
        // So we get our messages, and delete them. Simple enough, right?
        message.channel.messages.fetch({limit: deleteCount})
            .then(function(list){
                message.channel.bulkDelete(list);
                message.channel.send({embed: {
                    color: 16734039,
                    description: deleteCount + "mensajes borrados! :white_check_mark:"
                }}).then(msg => msg.delete(2000));
            }, function(err){
                message.channel.send({embed: {
                    color: 16734039,
                    description: "ERROR: " + err
                }})
        })  
    } else {
	message.channel.send({embed: {
                    color: 16734039,
                    description: "No tienes permiso para eliminar mensajes!"
                }})
	}
}
}
module.exports.help = {
    name: "prune",
    description: "Remover mensajes",
    usage: "prune <amount>",
    type: "Moderation"
}