const ms = require('ms');

module.exports = {
  name: "edit",
  aliases: ["gedit"],
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

    // If no field to edit is specifed
    if(!args[1]){
        return message.channel.send(':x: Necesitas editar el premio o los ganadores.!');
    }

    if(args[1] === 'prize'){
        let newPrize = args.slice(2).join(' ')

        if(!newPrize) return message.channel.send(':x: Tienes que proporcionar un nuevo premio.!');

        client.giveawaysManager.edit(args[0], {
            newPrize: newPrize,
        }).then(() => {
            // here, we can calculate the time after which we are sure that the lib will update the giveaway
            const numberOfSecondsMax = client.giveawaysManager.options.updateCountdownEvery / 1000;
            message.channel.send('✅ El premio del sorteo se actualizará en menos de ' + numberOfSecondsMax + ' segundos.');
        }).catch((err) => {
            message.channel.send(`:x: No se ha encontrado ningún regalo para \`${args[0]}\`, por favor, compruebe que tiene el mensaje correcto y vuelva a intentarlo.`);
        });
    }else
    if(args[1] === 'winners'){
        let newWinners = args[2]
        if(isNaN(newWinners) || (parseInt(newWinners) <= 0)){
            return message.channel.send(':x: Tienes que especificar un número válido de ganadores!');
        }

        client.giveawaysManager.edit(args[0], {
            newWinnerCount: newWinners,
        }).then(() => {
            // here, we can calculate the time after which we are sure that the lib will update the giveaway
            const numberOfSecondsMax = client.giveawaysManager.options.updateCountdownEvery / 1000;
            message.channel.send('✅El recuento de ganadores del sorteo se actualizará en menos de ' + numberOfSecondsMax + ' segundos.');
        }).catch((err) => {
            message.channel.send(`:x: No se ha encontrado ningún regalo para \`${args[0]}\`, compruebe que tiene el mensaje correcto y vuelva a intentarlo.`);
        });
    }else{
        return message.channel.send(':x: Necesitas editar el premio o los ganadores.!');
    }
}
}
module.exports.help = {
    name: "edit",
    description: "Para editar un giveaway",
    usage: "Editar <message_id> <to chnage things>",
    type: "Giveaway"  
}