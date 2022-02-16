
   module.exports = {
  name: "reaction-role",
  aliases: ["rr", "reactionrole"],
  execute: async(client, message, args) => {
     if(!message.member.hasPermission("ADMINISTRATOR"))
{
  return;
} 
    if(!args[0])
    {
      return message.reply("No me diste un emoji Aquí está la orden para hacer - ${prefix}rr 🎉 6969696969 @Giveaway-Ping/69696969\n Primero es Emoji para agregar\n El segundo es Message-id para agregar\n El tercero es Rol para hacer ping o Ingresar ID de rol");
    }
    if(!args[1])
    {
      return message.reply("No me dio una ID de mensaje para agregar esto Puede enviar un mensaje incrustado solo por Bot y agregarle un rol de reacción");
    }
  var role2 = message.mentions.roles.first();
  

if(!role2)
{
  var role2 = args[2];
  var role2 = message.guild.roles.cache.get(role2);
  console.log("No mencionado");
}

if(!role2)
{
  return message.reply("No me diste un papel");
}
client.reactionRoleManager.create({
      messageID: args[1],
      channel: message.channel,
      reaction: args[0],
      role: role2
})
message.channel.send(`Listo Tomará algún tiempo Agregar su servidor en la base de datos Por favor espere`);
 await message.delete();

return;
}}
  