const Discord = require("discord.js");
const ms = require("ms")
module.exports = {
  name: "hack",
  aliases: ["hax"],
  execute: async(client, message, args) => {
    const hacked = message.mentions.users.first();
    const user = message.mentions.users.first();
    if(user == client.users.cache.get(message.author.id))
    {
      return message.channel.send(" Ok, estás hackeado Elige a otra persona")
    }
            function wait(ms){
            let start = new Date().getTime();
            let end = start;
            while(end < start + ms) {
              end = new Date().getTime();
           }
         }

if(!user)
{
  return message.reply("¿A quién hackear? Por favor, menciónalo");
}
const prompt = await message.channel.send(`Hacking ${user ? hacked.username : hacked} now...`);
    
   await wait(2700);
     await  prompt.edit('Encontrar discord login...');
     await wait(2700);
     await  prompt.edit(`Found:\n**Email**: \`${hacked.username}***@gmail.com\`\n**Password**: \`*******\``);
     await  wait(3700);
     await  prompt.edit('Obtención de dms');
     await  wait(3700);
     await prompt.edit('Enumerando las palabras más comunes...');
     await  wait(2700);
     await  prompt.edit(`Inyectar virus en discriminador #${hacked.discriminator}`);
    await  wait(3700);
     await  prompt.edit('Virus inyectado');
     await  wait(3700);
    
   await prompt.edit('Hallazgo IP address');
    await wait(5000);
   await  prompt.edit('Correo electrónico no deseado...');
   await wait(6700);
   await  prompt.edit('Vender datos a facebook...');
  await   wait(3700);
  let embed = new Discord.MessageEmbed()
  .setDescription(`Un HACKING peligroso y muy ORIGINAL de ${user ? hacked.username : hacked} se acaba de completar`)
  .setImage("https://media1.tenor.com/images/5ba5501d9ee356cc0c478daa57306c19/tenor.gif?itemid=20964053");
  await prompt.delete
   await  message.channel.send(embed);
    

  }
}
