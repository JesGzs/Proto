const db = require("quick.db");
const Discord = require("discord.js");
module.exports = {
  name: "autonick",
  aliases: ["auto-nick"],
  execute: async(client, message, args) => {
      if (!message.member.hasPermission("MANAGE_GUILD"))
    {
       message.channel.send(
        "Nesesitas `MANAGE GUILD` para acceder a este comando!"
      );
      return;
}
if(!args[0]){
  return message.reply(" los pls ingresan un apodo como: LGT -nombre de usuario- OP (Nombre de usuario significa el nombre de usuario del carpintero)")
}
    let message1 = args.join(" ");
    if(message1 !== "disable")
{
  db.set(`nickm_${message.guild.id}`, message1);
  message.channel.send(`Listo Su mensaje ha sido configurado en la base de datos`);
}
if(args[0] == "disable" || args[0] == "off")
{
 db.delete(`nickm_${message.guild.id}`);
 return message.reply("hecho eliminó la función de autonick");
}

  }}