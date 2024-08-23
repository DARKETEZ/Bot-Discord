const Discord = require('discord.js');

const clc = require('cli-color');

const bot = new Discord.Client();

const token = '';

const PREFIX = '!cuasi ';

const fs = require('fs');

const moment = require('moment');

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command);
};

bot.on('ready', () => {
  console.log(clc.redBright('CUASI 2.0'));
  bot.user.setActivity('Matando a Cuasi')
});

bot.on('message', async message => {
  if (message.content.startsWith(PREFIX)) {
  let args = message.content.substring(PREFIX.length).split(" ");
  switch(args[0]){
     case 'teshin':
      message.delete().catch();
      message.channel.send('', {files: ['./img/teshin.png']});
    break;

     case 'help':
      bot.commands.get('help').execute(message, args, bot);
    break;

     case 'ban':
      bot.commands.get('ban').execute(message, args);
    break;

     case 'serverinfo':
       bot.commands.get('serverinfo').execute(message, args);
    break;

    case 'warn':
      bot.commands.get('warn').execute(message, args);
    break;

    case 'say':
      bot.commands.get('say').execute(message, args);
    break;

    case 'clear':
      bot.commands.get('clear').execute(message, args);
    break;

    case 'unban':
      bot.commands.get('unban').execute(message, args);
    break;
    }
      }else{
      return;

      };
    });
bot.login(token);
