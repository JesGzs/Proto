const Discord = require('discord.js')
const db = require('quick.db')


module.exports = {
  name: "buy",
  aliases: [],
  execute: async(client, message, args) => {
 var prefix =  db.fetch(`guildprefix_${message.guild.id}`);
    if(!prefix)
    {
      var prefix = ".";
    }
    let user = message.author;
let userpremiumdata = {
    userid: message.guild.id,
    premiumer: message.author.id,
    premiumcode: "yes"
   }
    let alreadypremium = new Discord.MessageEmbed()
.setTitle(`Ya eres un usuario premium`)
 let checking = db.get(`premium`)
    let author = db.fetch(`money_${message.author.id}`)

    let Embed = new Discord.MessageEmbed()
    .setColor("FF5757")
    .setDescription(`:cross: Necesitas 2000 monedas para comprar Bronze VIP`);


    if (args[0] == 'bronze') {
        if (author < 3500) return message.channel.send(Embed)
        
        db.fetch(`bronze_${message.author.id}`);
        db.set(`bronze_${message.author.id}`, true)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`:white_check_mark:  VIP de bronce comprado por 3500 monedas`);

        db.subtract(`money_${message.author.id}`, 3500)
        message.channel.send(Embed2)
    } else if(args[0] == 'nikes') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("FF5757")
        .setDescription(`Necesitas 600 monedas para comprar unas Nike.`);

        if (author < 600) return message.channel.send(Embed2)
       
        db.fetch(`nikes_${message.author.id}`)
        db.add(`nikes_${message.author.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`:white_check_mark:  Compró Nikes frescas por 600 monedas`);

        db.subtract(`money_${message.author.id}`, 600)
        message.channel.send(Embed3)
    } else if(args[0] == 'car') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("FF5757")
        .setDescription(`Necesitas 800 monedas para comprar un auto nuevo, pobre tipo, ruega para ganar algunas monedas.`);

        if (author < 800) return message.channel.send(Embed2)
       
        db.fetch(`car_${message.author.id}`)
        db.add(`car_${message.author.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`:white_check_mark:  Compró un auto nuevo por 800 monedas`);

        db.subtract(`money_${message.author.id}`, 800)
        message.channel.send(Embed3)
    } else if(args[0] == 'mansion') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("FF5757")
        .setDescription(` Necesitas 1200 monedas para comprar una Mansión`);

        if (author < 1200) return message.channel.send(Embed2)
       
        db.fetch(`house_${message.author.id}`)
        db.add(`house_${message.author.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`:white_check_mark: Compró una mansión por 1200 monedas`);

        db.subtract(`money_${message.author.id}`, 1200)
        message.channel.send(Embed3)
		
	} else if(args[0] == 'list') {
	let list = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Lista de todos los artículos que tienes que comprar:")
     	.addField("Bronce", "Costo: 3500 coins")
		.addField("Nikes", "Costo: 600 coins")
		.addField("Auto", "Costo: 800 coins")
		.addField("Mansion", "Costo: 1200 coins")
    .addField("7 Dias Premium", "Costo: 3000 coins")
      .addField("15 Dias Premium", "Costo: 6500 coins")
        .addField("30 DiASS Premium", "Costo: 10,000 coins")
		message.channel.send(list)
   
    
      
      
      
      } else {
        let embed3 = new Discord.MessageEmbed()
        .setColor("FF5757")
        .setTitle(`Enter an item to buy, type ${prefix}buy list to show all things`)
        message.channel.send(embed3)
    }

}
}
module.exports.help = {
    name: "buy",
    description: "Buy item from shop, add a `list` arg to display all things",
    usage: "buy <item>",
    type: "Economy"  
}
