




module.exports = {
  name: "slowmode",
  aliases: [],
  execute: async(client, message, args, data, db) => {
   
  
 if (!message.member.hasPermission("UNMUTE_MEMBERS"))
     {
      return;
    }
  let channel = message.channel;
   const vc1 = args.join(" ");
   const member = message.member;
  channel.setRateLimitPerUser(vc1, `Responsible - ${member}`);
        message.channel.send(`Listo, tengo este canal en modo lento para ${vc1} a ${channel}`)
  }
}
  module.exports.help = {
    name: "slowmode",
    description: "It Changes the slowmode of current channel",
    usage: "slowmode <SECONDS>",
	type: "Moderation"
}

