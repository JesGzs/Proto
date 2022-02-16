const db = require("quick.db");
module.exports = {
  name: "set-welcome",
  aliases: [],
  execute: async(client, message, args) => {

    if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      "**Tu no tienes los permisos requeridos! - [ADMINISTRATOR]**"
    );
  
  if (!args[0]) {
    let b = await db.fetch(`welcome_${message.guild.id}`);
    let channelName = message.guild.channels.cache.get(b);
    if (message.guild.channels.cache.has(b)) {
      return message.channel.send(
        `**El canal de bienvenida configurado en este servidor es \`${channelName.name}\` Channel!**`
      );
    } else return message.channel.send("**Ingrese el nombre del canal para configurar #[Nombre del canal] !**");
  }

  let channel =
    message.mentions.channels.first() ||
    client.guilds.cache.get(message.guild.id).channels.cache.get(args[0]) ||
    message.guild.channels.cache.find(
      c => c.name.toLowerCase() === args.join(" ").toLocaleLowerCase()
    );
  
  if (!channel || channel.type !== 'text') return message.channel.send("**Ingrese un canal de texto válido!**");

  try {
    let a = await db.fetch(`welcome_${message.guild.id}`);

    if (a === channel.id) {
      return message.channel.send(
        "**Este canal ya está configurado como canal de bienvenida**"
      );
    } else {
      client.guilds.cache
        .get(message.guild.id)
        .channels.cache.get(channel.id)
        .send("**Welcome Channel Set!**");
      db.set(`welcome_${message.guild.id}`, channel.id);

      message.channel.send(
        `**El canal de bienvenida se ha establecido con éxito en \`${channel.name}\`**`
      );
    }
    return;
  } catch (e) {
          return message.channel.send("**Error - `Permisos faltantes o el canal no es un canal de texto!`**");
  }
}

}
module.exports.help = {
    name: "welcome",
    description: "Set the welcome channel of server",
    usage: "welcome <channel>",
    type: "General"  
}