const Discord = require("discord.js");
const db = require("quick.db");

            module.exports = {
  name: "tictactoe",
  aliases: ["ttt"],
  execute: async(client, message, args) => {
 if(!message.mentions.users.first()) return message.channel.send(`Pls mention someone`)
    var mention = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
    if(!mention)
    {
      message.channel.send("No mencionaste a nadie para jugar contigo")
      return;
      
    }

    const { tictactoe } = require('easy-games-js')
    const tic = new tictactoe(mention, message)
    tic.init({ PROVIDE_MEMBER: "Por favor proporcione un miembro", ACCEPT_CHALLENGE: "{user} ¿Aceptas este reto? en caso afirmativo, escriba sí en este chat", DOESNT_PLAY: "parece {user} no quiere jugar", WICH_SIDE: "**{user}, ¿De qué lado eliges? Escribe \`End\` para finalizar el juego!**", GAME_OVER: "Se acabó el tiempo!", END: "end", INACTIVITY: "el juego termino por inactividad!", WINNER: "Felicidades has ganado {winner} ", DRAW: "Es un empate"})
        }
            }
        module.exports.help = {
    name: "tictactoe",
    description: "Will play tictactoe game with your mentioned persom",
    usage: "tictactoe <mention>",
    type: "Fun"   
}