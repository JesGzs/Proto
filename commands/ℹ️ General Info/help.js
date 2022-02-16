const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const db = require("quick.db");
const Discord = require("discord.js")
module.exports = {
  name: "help",
  aliases: ['h', 'helppls'],
  description: "Shows all available bot commands.",
  execute: async (client, message, args) => {

    const embed = new Discord.MessageEmbed() 
        .setTitle("Comandos de Proto <a:black_and_white_tick:943346246909845575>", client.user.avatarURL())
        .setFooter(message.author.username, message.author.displayAvatarURL({dynamic : true}))
        .setTimestamp()
        .setThumbnail("https://cdn.discordapp.com/attachments/888614570065797150/943348882958590002/unnamed_1.gif")
        .addField("**<a:4a26aa20e8a54406b3b8a72b3d10132d:775540008476082176> | JUEGOS DE ADIVINANZAS > 3**",
        "```find-words,guess-number,lovecalc```")
        .addField("**<a:631322923440930826:784542417134157844> | ANTI MALAS PALABRAS > 1**",
        "```anti-badwords```")
        .addField("**<a:moderacion2:788168905511272459> | AUTOMOD > 8**",
"```anti-alt,antilink,autonick,auto-official-role,auto-official-role-disable,autorole,role-all```")
.addField("**<a:divertdiso:788169650763464734> | DIVERTIDOS > 25**",
"```afk,animesearch,ascii,baka,beep,dumb,calc,cattext,dice,eightball,flipcoin,fliptext,hack,iq,joke,kill,messages,poke,poll,ratewaifu,rps,sneeze,waifu,youtube,zalgo```")
.addField("**<:3668_AmongUs_Dab:771205554404065291> | INFORMACION PARA PERSONAS > 24**",
"```profile```")
.addField("**<a:juegos:788168885198651443> | BIOGRAFIA > 3**",
  "```set-bio,bio-reset,check-bio```")
.addField("**<a:busqueda:788168832421593119> | COMANDOS PERSONALIZADOS > 3**",
  "```cc-create,cc-delete,cc-list```")
  .addField("**<a:68747470733a2f2f692e67697068792e:771956082456920075> | NIVEL > 1**",
  "```RANK```")
.addField("**<a:4a26aa20e8a54406b3b8a72b3d10132d:775540008476082176> | LOGS > 3**",
  "```logs-ticket,set-logs,remove-logs```")
  .addField("<a:giphy:777015803300151327> | GIVEAWAY > 7",
  "```edit,list,end,reroll,start,create,cancel```")
.addField("**<a:warrensong:774496826044579871> | BIENVENIDA Y DESPEDIDA > 4**",
  "```faltan```")
.addField("**🎫 | TICKET > 7** ", 
"```add,close,delete,new,open,remove,setup```")
.addField("**<a:hola2:943357474612854806> | BIENVENIDAS/DESPEDIDAS > 4** ", 
"```set-welcome,set-leave,disable-leave,disable-welcome```")
.addField("**:birthday: | CUMPLEAÑOS > 2** ", 
"```check-birthday,set-birthday```")
.addField("**:rainbow: | REACTION ROLES** > 2 ", 
"```reaction-role,reaction-role-remove```")
.addField("**<:EmoteController:943345766720753695> | JUEGOS** > 4 ", 
"```csgo,poke,slots,tictactoe```")
.addField("**<a:GatoXD:943345920710422559> | IMAGENES** > 34 ", 
"```3000yr,approved,batslap,beautiful,brazzers,burn,cat,challenger,cuddle,dict,distort,dog,ddungeon,facechange,fire,flatearth,foxgirl,gay,hug,kiss,love,magik,meme,qrcode,randomav,rip,scary,slap,triggered,tickle,tweet,vs,wanted```")
.addField("**<a:moderacion2:788168905511272459> | MODERACION** > 29 ", 
"```announce,ban,color,hide,kick,lock,maintainence,nuke,prune,purge,say,sendembed,serverlock,serverunlock,set,slowmode,stealemoji,unban,unhide,unlock,vcid,voicedeafen,voicekick,voicemove,voicemute,voiceundeaf,voiceunmute,warn,warns```")
.addField("**<a:pepepopcorn:943345558637133904> | UTILIDAD** > 11 ", 
"```avatar,covid,id,members,roleid,github,servericon,serverinfo,time,info,weather```")
.setColor("#1D4FCD")
.setDescription(`Proto es un bot multipropósitos enfocado a la diversión administracion y entretenimiento del servidor.,**Uso PREFIX<comando>**`);

 return message.channel.send(embed)
    }
  }
