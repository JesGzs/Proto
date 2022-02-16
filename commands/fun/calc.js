const math = require('math-expression-evaluator');
const stripIndents = require('common-tags').stripIndents;
const Discord = require("discord.js");

module.exports = {
  name: "calc",
  aliases: ["calculate"],
  execute: async(client, message, args, data, db) => {

       if(message.guild === null)return;


    if(args.length < 1) {
	    return message.channel.send({embed: {
            color: 16734039,
            description: "¡Debe proporcionar una ecuación para resolver en la calculadora! (eg. 9 + 10)"
        }}) 
    }
			
    const question = args.join(' ');

    let answer;
    if(question.indexOf('9 + 10') > -1) {
        answer = '21 (🤣 XD, Encontraste huevo de pascua)';
    } else {
        try {
            answer = math.eval(question);
        } catch (err) {
          message.channel.send({embed: {
                color: 16734039,
                description: "Ecuación matemática no válida: " + `${err}`
            }});
          return;
        }
    }

  const calc = new Discord.MessageEmbed()
              .setTitle("Calculadora")
              .setColor(`RANDOM`)
              .addField("Pregunta: ", `${question}`)
              .addField("Respuesta: ", `${answer}`)
          message.channel.send(calc);
}
}
module.exports.help = {
    name: "calc",
    description: "Calculator",
    usage: "calc <task>",
    type: "Fun" 
}