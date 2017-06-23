//==================================================================//
global._ = require ('lodash');
//==================================================================//
const Discord = require ('discord.js');
const fs = require('fs');
//==================================================================//
const bot = new Discord.Client();
bot.PREFIX = "/";

const TOKEN = process.env.TOKEN;
const fortunes = [
    "Yes",
    "No",
    "Maybe",
    "I think so"
];
//==================================================================//
fs.readdir('./events/', (err, events) => {
  if (err) throw(err);
  events.forEach(async e => {
    await require(`./events/${e}`)(bot);
  });
});
//==================================================================//
bot.login(TOKEN);
