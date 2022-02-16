const ms = require('ms');

module.exports = {
  name: "start",
  aliases: ["gstart"],
  execute: async(client, message, args) => {
    
  
 

    // If the member doesn't have enough permissions
       if (!message.member.hasPermission("MANAGE_GUILD"))
    {
       message.channel.send(
        "Nesesitas `MANAGE GUILD` para acceder a este comando!"
      );
      return;
}

   // If the member doesn't have enough permissions
   
    // Giveaway channel
    var giveawayChannel = message.mentions.channels.first();
    // If no channel is mentionned
    if(!giveawayChannel){
        var giveawayChannel = message.channel;
    }

    // Giveaway duration
    let giveawayDuration = args[0];
    // If the duration isn't valid
    if(!giveawayDuration || isNaN(ms(giveawayDuration))){
        return message.channel.send(':x: Tienes que especificar una duración válida!');
    }

    // Number of winners
    let giveawayNumberWinners = args[1];
    // If the specified number of winners is not a number
    if(isNaN(giveawayNumberWinners) || (parseInt(giveawayNumberWinners) <= 0)){
        return message.channel.send(':x: Tienes que especificar un número válido de ganadores!');
    }else
    if(giveawayNumberWinners > 10){
        return message.channel.send(':x: Debes tener menos de 10 ganadores!');
    }

    // Giveaway prize
    let giveawayPrize = args.slice(2).join(' ');
    // If no prize is specified
    if(!giveawayPrize){
        return message.channel.send(':x: Tienes que especificar un premio válido!');
    }

    // Start the giveaway
    
    client.giveawaysManager.start(giveawayChannel, {
        // The giveaway duration
        time: ms(giveawayDuration),
        // The giveaway prize
        prize: giveawayPrize,
        // The giveaway winner count
        winnerCount: giveawayNumberWinners,
        // Who hosts this giveaway
        hostedBy: client.config.hostedBy ? message.author : null,
        // Messages
        messages: {
            giveaway: (client.config.everyoneMention ? "@everyone\n\n" : "")+ client.config.giveawayEmoji + "** GIVEAWAY **" + client.config.giveawayEmoji,
            giveawayEnded: (client.config.everyoneMention ? "@everyone\n\n" : "")+ client.config.giveawayEmoji + "** GIVEAWAY ENDED **" + client.config.giveawayEmoji,
            timeRemaining: "Time remaining: **{duration}**!",
            inviteToParticipate: "React with " + client.config.giveawayEmoji + " to participate!",
            winMessage: client.config.giveawayEmoji + " {winners} won **{prize}**!",
            embedFooter: client.config.botName,
            noWinner: "Giveaway cancelled, no valid participations.",
            hostedBy: "Hosted by: {user}",
            winners: "winner(s)",
            endedAt: "Ended at",
            units: {
                seconds: "seconds",
                minutes: "minutes",
                hours: "hours",
                days: "days",
                pluralS: false // Not needed, because units end with a S so it will automatically removed if the unit value is lower than 2
            }
        }
    });

    message.channel.send(`${client.config.giveawayEmoji} El sorteo comenzó en <#${giveawayChannel.id}>`);

}}
module.exports.help = {
    name: "start",
    description: "Para empezar un sorteo",
    usage: "start ",
    type: "Giveaway" 
}