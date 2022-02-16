const ms = require('ms');

module.exports = {
  name: "end",
  aliases: ["gend"],
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
        return message.channel.send(':x: No se puede encontrar un regalo para `'+ args.join(' ') + '`.');
    }

    // Edit the giveaway
    client.giveawaysManager.edit(giveaway.messageID, {
        setEndTimestamp: Date.now()
    })
    // Success message
    .then(() => {
        // Success message
        message.channel.send('✅ El sorteo terminará en menos de '+(client.giveawaysManager.options.updateCountdownEvery/1000)+' segundos...');
    })
    .catch((e) => {
        if(e.startsWith(`Sorteo con ID de mensaje ${giveaway.messageID} ya ha terminado.`)){
            message.channel.send('Este sorteo ya ha finalizado!');
        } else {
            console.error(e);
            message.channel.send(':x: Hubo un error');
        }
    });

}}
module.exports.help = {
    name: "end",
    description: "Para terminar Giveaway",
    usage: "end <message_id> or <Giveaway_Prize_Name>",
    type: "Giveaway" 
}