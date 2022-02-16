
   module.exports = {
  name: "reaction-role-remove",
  aliases: ["reactionrole-remove"],
  execute: async(client, message, args) => {
     if(!message.member.hasPermission("ADMINISTRATOR"))
{
  return;
} 
    if(!args[0])
    {
      return message.reply("Por favor, dame ID de mensaje");
    }
    if(!args[1])
    {
      return message.reply("Por favor, dame un emoji para eliminar esa reacción.");
    }
client.reactionRoleManager.delete({
          messageID: args[0],
          reaction: args[1],
        });
message.channel.send(`Listo eliminó los roles de reacción`);
 

return;
}}
  