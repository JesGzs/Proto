    module.exports = {
  name: "unlock",
  aliases: [],
  execute: async(client, message, args, data, db) => {
   
  
 if (!message.member.hasPermission("MANAGE_CHANNELS"))
     {
      return;
    }
  let channel = message.channel;

   const vc1 = args.join(" ");
   channel.overwritePermissions([
  {
     id: message.guild.roles.everyone.id,
     allow: ['SEND_MESSAGES'],
  },
], 'unLockdown');
        message.channel.send("Este canal ha sido desbloqueado disfrútalo.")
  }
    }
  module.exports.help = {
    name: "unlock",
    description: "It unLocks the current channel",
    usage: "unlock",
	type: "Moderation"
}