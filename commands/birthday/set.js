const Discord = require("discord.js");
const db = require("quick.db");
module.exports = {
  name: "set-birthday",
  aliases: ["set-hbd", "set-bd"],
  execute: async(client, message, args) => {
      const months = {
            1: "January",
            2: "February",
            3: "March",
            4: "Apirl",
            5: "May",
            6: "June",
            7: "July",
            8: "August",
            9: "September",
            10: "October",
            11: "November",
            12: "December"
        };
    if(message.mentions.users.first()){
      return message.channel.send("Solo puede configurar el cumpleaños de usted mismo");
    }
       const joined = args.join(" ");
       if(message.content.includes("/"))
       {
        var split = joined.trim().split("/");
       }
        if(message.content.includes("-"))
       {
        var split = joined.trim().split("-");
       }
        let [day, month] = split;
                if (!day) return message.reply('Por favor especifica una fecha! Ejem- .set-birthday 6-11');
        if (!month) return message.reply('Por favor especifica un mes valido! Ejem .set-birthday 6-11');

        if (isNaN(day) || isNaN(month)) return message.reply('Por favor especifica un numero valido! Ejem- .set-birthday 5/12');
         day = parseInt(day);
        month = parseInt(month);
                if (!day || day > 31) return message.reply('Por favor, especifique una fecha dentro de 31! Ejem- .set-birthday 5/12');
        if (!month || month > 12) return message.reply('Por favor, especifique un mes dentro de 12! Ejem- .set-birthday 5/12');
         const convertedDay = suffixes(day);
        const convertedMonth = months[month];
         const BirthdayString = `${convertedDay} of ${convertedMonth}`;
         db.set(`birthdate_${message.author.id}`, BirthdayString);
          message.reply(`${BirthdayString} se ha establecido como su fecha de cumpleaños!`)
  }
}
function suffixes(number) {
    const converted = number.toString();

    const lastChar = converted.charAt(converted.length - 1);

    return lastChar == "1"
     ? `${converted}st`
     : lastChar == "2" 
     ? `${converted}nd` 
     : lastChar == "3"
     ? `${converted}rd` 
     : `${converted}th`;
}