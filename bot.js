//==================================================================//
const Discord = require ('discord.js');
const _ = require ('lodash');
//==================================================================//
const TOKEN = process.env.TOKEN;
const PREFIX = "/";
const fortunes = [
    "Yes",
    "No",
    "Maybe",
    "I think so"
];
const bot = new Discord.Client();
//==================================================================//
const generateHex = () => '#' + _.random(0, 16777214).toString(16);
//==================================================================//
fs.readdir('./events/', (err, events) => {
  if (err) console.error(err);
  events.forEach(async e => {
    await require(`./events/${e}`)(client);
  });
});
//==================================================================//
bot.login(TOKEN);
