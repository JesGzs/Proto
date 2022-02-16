    module.exports = {
  name: "voiceundeaf",
  aliases: [],
  execute: async(client, message, args, data, db) => {
   
  
 if (!message.member.hasPermission("UNMUTE_MEMBERS"))
     {
      return;
    }
  let channel = message.member.voice.channel;
        for (let member of channel.members) {
            member[1].voice.setDeaf(false)
        }
        message.channel.send("Listo he dejado sordos a todas las personas que estaban en tu vc")
  }
    }
  module.exports.help = {
    name: "voiceundeaf",
    description: "It undeafen all users who are in vc",
    usage: "voiceundeaf",
	type: "Moderation"
}