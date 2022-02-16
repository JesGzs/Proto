  const Discord = require("discord.js");
const db = require("quick.db")
module.exports = {
  name: "sendembed",
  aliases: [],
  execute: async(client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
    {
      return;
    }
    if (args[1] <= 0)
        return message.reply(`${emoji.Error} Oh, vamos, hombre, di algo para poder proporcionarlo en formato incrustado. !!`)
        .then(message => {
            message.delete({ timeout: 10000 })
        });
        message.delete();
         const taggedChannel = await message.mentions.channels.first();
         var prefix2 = db.fetch(`guildprefix_${message.guild.id}`);
         if(!prefix2)
         {
           var prefix2 = ".";
         }
let colour1 = db.fetch(`embed_${message.guild.id}`);
        if(taggedChannel) {
           const embed1 = new Discord.MessageEmbed()
           .setDescription(args.join(" ").replace(taggedChannel, ""))
           .setColor(`${colour1}`)
            await taggedChannel.send(embed1);
             message.channel.send(`por cierto, puedes cambiar el color incrustado por ${prefix2}embed <any_color> Como rojo azul y ETC`) .then(message => {
            message.delete({ timeout: 10000 })
 });
        }
        if(!taggedChannel)
        {
        var prefix1 = db.fetch(`guildprefix_${message.guild.id}`);
      let colour = db.fetch(`embed_${message.guild.id}`);
        const embed = new Discord.MessageEmbed()
        .setDescription(args.join(" "))
        .setColor(`${colour}`)
        message.channel.send(embed)
        message.channel.send(`por cierto, puedes cambiar el color incrustado por ${prefix1}embed <any_color> Como rojo azul y ETC`) .then(message => {
            message.delete({ timeout: 10000 })
 });
        }
    }
}
    module.exports.help = {
    name: "sendembed",
    description: "Envía el comando incrustado al canal que escribiste y el texto incrustado será lo que quieras!",
    usage: "sendembed <text>",
    type: "Moderation"
}