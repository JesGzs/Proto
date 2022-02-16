const ms = require('ms');

module.exports = {
  name: "reroll",
  aliases: ["greroll"],
  execute: async(client, message, args) => {


  // If the member doesn't have enough permissions
     if (!message.member.hasPermission("MANAGE_GUILD"))
    {
       message.channel.send(
        "Nesesitas `MANAGE GUILD` para acceder a este comando!"
      );
      return;
}

    // If no message ID or giveaway name is specified
    if(!args[0]){
        return message.channel.send(':x: Tienes que especificar un ID de mensaje válido!');
    }

    // try to found the giveaway with prize then with ID
    let giveaway = 
    // Search with giveaway prize
    client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
    // Search with giveaway ID
    client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

    // If no giveaway was found
    if(!giveaway){
        message.channel.send(`:x: No se ha encontrado ningún regalo para \`${messageID}\`, por favor, compruebe que tiene el mensaje correcto y vuelva a intentarlo.`);
    }

    // Reroll the giveaway
    client.giveawaysManager.reroll(giveaway.messageID, {
        messages: {
            congrat: client.config.giveawayEmoji + 'Nuevo(s) ganador(es) : {winners}! Felicicades!'
        }
    })
    .then(() => {
        // Success message
        message.channel.send('✅ Sorteo reprogramado!');
    })
    .catch((e) => {
        if(e.startsWith(`Sorteo con ID de mensaje ${giveaway.messageID} no ha terminado.`)){
            message.channel.send('Este sorteo no ha terminado.!');
        } else {
            console.error(e);
            message.channel.send(':x: Hubo un error');
        }
    });
}}
module.exports.help = {
    name: "reroll",
    description: "Volverá a rodar el Sorteo",
    usage: "reroll <message_id>",
    type: "Giveaway"  
}