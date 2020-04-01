const Discord = require('discord.js');

const clc = require('cli-color');

const bot = new Discord.Client();

const token = 'Njk0MDA0ODkzMzQxNDUwMjYw.XoJhrA.drJeJg8yR0Vx1AqghCctxACWnq4';

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

    case 'micodigo':
      message.channel.send('Al estar vasado en muchos bot MI PADRE NO ES ORIGINAL PERO viva papiiii');
    break;

     case 'mipapi':
      message.channel.send('Me creo DIEGO, alias DARK, pero trabajo como asesino con Enrique KING Gonzalez.');
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

    case 'tonto':
      message.channel.send("S3gg, claro es buena persona y amigo pero las cosas como son es re pnd jajaja");
    break;

    case 'clanes':
      message.channel.send("Acutual mente contamos con...... `30` clanes en la alianza");
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

    case 'cuasi':
      message.channel.send("Don cuasi o como se le conose como cuasi de sinaloa es un narcotraficante famoso se dise q actualmente el gana 30 millones diarios por su trabajos malos supera a cualquier narco y le gusta poner el comando ch!fuck cuando se emociona o se siente feliz con alguien... sus padres se llaman la reina del sur y el padre se llama el perrom mamon el nacio en 1850 antes de cristo el actualente es karateka es sinta negra supera a putini x100 contaria mas pero eso es de su vida privada....");
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
