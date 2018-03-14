const Discord = require("discord.js");

const TOKEN = "NDIzNTMzOTM1Nzg4Njg3Mzcw.DYr5Pw.eYXpvqz7L6eOIvBPwOEeL9_uB8I";

var bot = Discord.Client();

bot.on("message", function(message) {
console.log(message.content);
});

bot.login(TOKEN);

