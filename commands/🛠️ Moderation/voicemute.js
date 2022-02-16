     module.exports = {
  name: "voicemute",
  aliases: [],
  execute: async(client, message, args, data, db) => {
   
  
 if (!message.member.hasPermission("MUTE_MEMBERS"))
     {
      return;
    }
  let channel = message.member.voice.channel;
        for (let member of channel.members) {
            member[1].voice.setMute(true)
        }
        message.channel.send("Listo, he silenciado a todas las personas que estaban en tu vc.")
  }
     }
  module.exports.help = {
    name: "voicemute",
    description: "It mutes all users who are in vc",
    usage: "voicemute",
	type: "Moderation"
}
