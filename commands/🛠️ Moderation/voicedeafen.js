    module.exports = {
  name: "voicedeafen",
  aliases: [],
  execute: async(client, message, args, data, db) => {
   
  
 if (!message.member.hasPermission("UNMUTE_MEMBERS"))
     {
      return;
    }
  let channel = message.member.voice.channel;
        for (let member of channel.members) {
            member[1].voice.setDeaf(true)
        }
        message.channel.send("Listo he ensordecido a todas las personas que estaban en tu vc")
  }
    }
  module.exports.help = {
    name: "voicedeafen",
    description: "It deafen all users who are in vc",
    usage: "voicedeafen",
	type: "Moderation"
}