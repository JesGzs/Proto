     module.exports = {
  name: "voiceunmute",
  aliases: [],
  execute: async(client, message, args, data, db) => {
   
  
 if (!message.member.hasPermission("UNMUTE_MEMBERS"))
     {
      return;
    }
  let channel = message.member.voice.channel;
        for (let member of channel.members) {
            member[1].voice.setMute(false)
        }
        message.channel.send("Listo, he activado el silencio de todas las personas que estaban en tu vc.")
  }
     }
  module.exports.help = {
    name: "voiceunmute",
    description: "It unmutes all users who are in vc",
    usage: "voiceunmute",
	type: "Moderation"
}
