const Discord = require("discord.js");
const { Message } = require("discord.js");
const fs = require("fs");

module.exports = async (client, message) => {
    
    client.user.setActivity(`Your Commands!!! | .help FOr My Commands | Also Watching ${client.guilds.cache.size} Servers`, { type : "WATCHING" });
   
    client.ws.on('INTERACTION_CREATE', async (interaction) => {
   client.slash.commandsrun(interaction, client);
  
    })          
             
    let channel = client.channels.cache.get("942999771449266217")   
    channel.send(" REESTANDO TODO | ACTUALIZANDO 🌀").then((msg) => {
      setTimeout(function() {
      msg.edit('TODO ACTUALIZADO CON ÉXITO | ESTADO DEL BOT EN LÍNEA');
    }, 7000)})
    console.log("EL BOT ESTA LISTO PARA USARSE")
   
}