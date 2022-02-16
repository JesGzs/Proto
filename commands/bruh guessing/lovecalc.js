const currentGames = {};
const Discord = require("discord.js"),
md5 = require("md5");
module.exports = {
  name: "love-calc",
  aliases: ["calc-love", "lovecalc", "calclove"],
  execute: async(client, message, args) => {
	const firstMember = message.mentions.members.filter(m => m.id !== message.author.id).first();
		if (!firstMember)
			return message.channel.send("Falta el usuario");
		const secondMember =
			message.mentions.members
				.filter(m => m.id !== firstMember.id)
				.filter(m => m.id !== message.author.id)
				.first() || message.member;
		if (!secondMember)
			return message.error("Falta el usuario");

		const members = [firstMember, secondMember].sort(
			(a, b) => parseInt(a.id, 10) - parseInt(b.id, 10)
		);
		const hash = md5(
			`${members[0].id}${members[1].user.username}${members[0].user.username}${members[1].id}`
		);

		const string = hash
			.split("")
			.filter(e => !isNaN(e))
			.join("");
		const percent = parseInt(string.substr(0, 2), 10);

		const embed = new Discord.MessageEmbed()
			.setAuthor("❤️ LoveCalc")
			.setDescription(`${firstMember.user.username} Ama ${secondMember.user.username} ${percent}% `)
			.setColor("RED")
	    .setFooter("Así Ambos Se Aman Y También Se Hicieron El Uno Para El Otro (Por favor no te tomes esto tan enserio)")
      .setThumbnail("https://cdn.discordapp.com/emojis/819410218382917662.gif?v=1")

		message.channel.send(embed);


  }
}