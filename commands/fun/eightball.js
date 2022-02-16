const Discord = module.require("discord.js");

module.exports = {
  name: "eightball",
  aliases: ["fortuna", "eb", "8ball", "8b"],
  execute: async(client, message, args, data, db) => {
  if (!args.length) return message.channel.send({embed: {
         color: 16734039,
         description: "Necesitas pedir una fortuna"
         }})


  var fortunes = ["Si.", "Es cierto.", "Es decididamente así.", "Sin dudas.", "Sí, definitivamente.", "Puede confiar en él.",
  "Como yo lo veo, sí.", "Lo más probable.", "Buen panorama.", "Las señales apuntan a que sí.", "Responde confuso, inténtalo de nuevo.", "Pregunte de nuevo más tarde.", 
  "Mejor no decírtelo ahora...", "No puedo predecir ahora.", "Concéntrate y vuelve a preguntar.", "No cuentes con ello.", "Mi respuesta es no.", 
  "Mis fuentes dicen que no.", "Las perspectivas no son tan buenas...", "Muy dudoso.",];  
  
  await message.channel.send({embed: {
         color: 3447003,
         description: fortunes[Math.floor(Math.random()*fortunes.length)]
         }})

}
}
module.exports.help = {
    name: "eightball",
    description: "Tells you a fortune",
    usage: "eightball <message>",
    type: "Fun"  
}
