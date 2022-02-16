const ms = require('ms');

module.exports = {
  name: "gdelete",
  aliases: ["gcancel", "gdelete"],
  execute: async(client, message, args) => {


  // If the member doesn't have enough permissions
     if (!message.member.hasPermission("MANAGE_GUILD"))
    {
       message.channel.send(
        "Nesesitas `MANAGE GUILD` para acceder a este comando!"
      );
      return;
}


    if(!args[0]){
        return message.channel.send(':x: Tienes que especificar un ID de mensaje válido!');
    }

    let messageID = args[0];
        client.giveawaysManager.delete(messageID).then(() => {
            message.channel.send("✅ Giveaway deleted!");
        }).catch((err) => {
            message.channel.send(":x: No se encontró ningún obsequio para \`${messageID}\`, verifique que tenga el mensaje correcto e intente nuevamente.");
        });
}}
module.exports.help = {
    name: "gdelete",
    description: "Se eliminará el Sorteo",
    usage: "gdelete <message_id>",
    type: "Giveaway"  
}