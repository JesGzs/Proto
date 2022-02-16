const Discord = require("discord.js");

module.exports = {
  name: "ban",
  aliases: [],
  execute: async(client, message, args, data, db) => {
    
    if (message.member.hasPermission("BAN_MEMBERS")) {
      if(!message.guild.me.hasPermission('BAN_MEMBERS')){ return message.channel.send('no tengo suficientes permisos');
      }
        const Member = message.mentions.members.first();
        if(!Member) return message.channel.send('Por favor especifique un usuario para prohibir.');
        if(Member.id == message.author.id){
          return message.channel.send("No puedo autobanearte");
        }
        if(Member.id == client.user.id){
          return message.channel.send("no puedo banearme")
        }
        
       var args2 = args.slice(1).join(" ");
        if(!args2)
        {
          var args2 = "No se proporcionó ninguna razón";
        }
        await Member.ban({ reason : `${args2}`})
        const embed = new Discord.MessageEmbed()
        .setTitle('BAN')
        .setColor("RANDOM")
        .setThumbnail('https://cdn.discordapp.com/attachments/796744218893746176/816713126245957693/kick.gif')
        .setDescription(`${Member.user.tag} fue baneado del servidor!`)
        .setTimestamp()


        message.channel.send(embed)
    }
}
}
module.exports.help = {
    name: "ban",
    description: "Bans a member",
    usage: "ban <mention> <reason>",
    type: "Moderation"
}