const ms = require('ms');

module.exports = {
  name: "create",
  aliases: ["gcreate"],
  execute: async(client, message, args) => {
    
  
 let giveawayChannel = ''
    let giveawayDuration = ''
    let giveawayNumberWinners = ''
    let giveawayPrize = ''
    let status = ''

    // If the member doesn't have enough permissions
       if (!message.member.hasPermission("MANAGE_GUILD"))
    {
       message.channel.send(
        "Nesesitas `MANAGE GUILD` para acceder a este comando!"
      );
      return;
}

    // Giveaway channel
    async function part1(){
        await message.channel.send(`>>> ${client.config.giveawayEmoji} Mencione el canal en el que debe estar el sorteo..\nEntrar \`cancelar\` para cancelar.`)
        await message.channel.awaitMessages(m => m.author.id == message.author.id,
        {max: 1, time: 1800000}).then(collected => {
            if (collected.first().content.toLowerCase() == 'cancel') {
                message.channel.send('**Comando Cancelado**')
                status = 1
                return
            }else{
                giveawayChannel = collected.first().mentions.channels.first()
            if(!giveawayChannel){
                message.reply('No se mencionó ningún canal\nPor favor, inténtalo de nuevo.')
              
            }}
        }).catch(() => {
            message.reply('No hay respuesta después de 30 minutos, intente el comando nuevamente.');
            status = 1
    })
    }

    // Giveaway duration
    async function part2(){
        await message.channel.send(`>>> ${client.config.giveawayEmoji} ¿Cuánto debe durar el sorteo?\nIngresa \`cancelar\` para cancelar.`)
        await message.channel.awaitMessages(m => m.author.id == message.author.id,
        {max: 1, time: 1800000}).then(collected => {
            if (collected.first().content.toLowerCase() == 'cancel') {
                message.channel.send('**Comando Cancelado**')
                status = 1
                return
            }else
            if(isNaN(ms(collected.first().content.toLowerCase()))){
                message.channel.send(':x: Tienes que especificar una duración válida!');
               
            }else{
                giveawayDuration = collected.first().content
            }
        }).catch(() => {
            message.reply('No hay respuesta después de 30 minutos, intente el comando nuevamente.');
            status = 1
    })
    }

    // Number of winners
    async function part3(){
        await message.channel.send(`>>> ${client.config.giveawayEmoji} ¿Cuántos ganadores debería haber?\n**Máx. 10**\nIngrese \`cancelar\` para cancelar.`)
        await message.channel.awaitMessages(m => m.author.id == message.author.id,
        {max: 1, time: 1800000}).then(collected => {
            if (collected.first().content.toLowerCase() == 'cancel') {
                message.channel.send('**Comando Cancelado**')
                status = 1
                return
            }else
            if(isNaN(collected.first().content.toLowerCase()) || (parseInt(collected.first().content.toLowerCase()) < 0)){
                message.channel.send(':x: Tienes que especificar un número válido de ganadores!');
                
            }else 
            if(collected.first().content.toLowerCase() > 10){
                message.channel.send(':x: Debes tener menos de 10 ganadoras.!');
                status = 1
                return
            }else{
                giveawayNumberWinners = collected.first().content
            }
        }).catch(() => {
            message.reply('No hay respuesta después de 30 minutos, intente el comando nuevamente.');
            status = 1
    })
    }

    // Giveaway prize
    async function part4(){
        await message.channel.send(`>>> ${client.config.giveawayEmoji} ¿Cuál debería ser el premio del sorteo?\nIngresa \`cancelar\` para cancelar.`)
        await message.channel.awaitMessages(m => m.author.id == message.author.id,
        {max: 1, time: 1800000}).then(collected => {
            if (collected.first().content.toLowerCase() == 'cancel') {
                message.channel.send('**Comando Cancelado**')
                status = 1
                return
            }else{
                giveawayPrize = collected.first().content
            }
        }).catch(() => {
            message.reply('No hay respuesta después de 30 minutos, intente el comando nuevamente.');
            status = 1
    })
    }

    // Start the giveaway
    async function part5(){
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
                giveaway: (client.config.everyoneMention ? "@everyone\n\n" : "")+ client.config.giveawayEmoji + " **GIVEAWAY** " + client.config.giveawayEmoji,
                giveawayEnded: (client.config.everyoneMention ? "@everyone\n\n" : "")+ client.config.giveawayEmoji + "** GIVEAWAY ENDED **" + client.config.giveawayEmoji,
                timeRemaining: "Time remaining: **{duration}**!",
                inviteToParticipate: "React with " + client.config.giveawayEmoji + " to participate!",
                winMessage: client.config.giveawayEmoji + " {winners} won **{prize}**!",
                embedFooter: "Dumb-Bot",
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

        message.channel.send(`${client.config.giveawayEmoji} Giveaway started in <#${giveawayChannel.id}>`);
    }

    async function main(){
        await part1()
        if(status) return
        await part2()
        if(status) return
        await part3()
        if(status) return
        await part4()
        if(status) return
        await part5()
        }

        main()
}}
module.exports.help = {
    name: "create",
    description: "Crear giveaway",
    usage: "create",
    type: "Giveaway" 
}