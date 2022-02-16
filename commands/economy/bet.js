const { MessageEmbed } = require('discord.js');

const db = require("quick.db");
module.exports = {
    name : 'bet',
    description : 'Returns latency and API ping',

    execute: async(client, message, args) => {
    if(!args[0]) return message.reply('Por favor, especifique una cantidad para apostar');
    
    if(isNaN(args[0])) return messagae.reply('Pobres solo se puede apostar en numeros | ejemplo: `.bet 100`');
    
    const amountToBet = parseInt(args[0]);
   
  let bal = db.fetch(`money_${message.author.id}`)

  if (bal === null)
  { bal = 0;}

    if(bal < amountToBet) return message.reply('¡Pobre hombre visto! no tienes suficiente dinero para apostar💩');
    
    
      const botrun = Math.floor(Math.random() * 50) + 1
      const run = Math.floor(Math.random() * 50) + 2
     
   
    const winAmount = amountToBet * 2;
    if(botrun <= run) {
      const embed20 = new MessageEmbed()
      .setDescription(`Has ganado ${winAmount} monedas Mi número era : ${botrun} y tu eras ${run}`)
      message.channel.send(embed20);
       db.add(`money_${message.author.id}`, winAmount)
      
    } else {
        const embed21 = new MessageEmbed()
        .setDescription(`Triste, perdiste ${amountToBet} monedas mejor suerte la próxima vez Mi número fue : ${botrun} y tu eras ${run}`)
        message.channel.send(embed21);
      db.subtract(`money_${message.author.id}`, amountToBet);
      
    }
    
    }
}