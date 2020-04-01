module.exports = {
    name: 'warn',
    description: "Avisa a un miembro sobre algo malo que ha hecho.",
execute(message, args){
    try {
    if (message.member.roles.find("name", "Admin")){
        const Discord = require('discord.js');
        var embedColor = '#22eef9' 
        const moment = require("moment");
        var missingArgsEmbed = new Discord.RichEmbed() 
            .setColor(embedColor)
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTitle('Argumentos insuficientes!')
            .setDescription('Uso: !cuasi warn <@User> <Motivo>')
            .setTimestamp();
        let mentioned = message.mentions.users.first();
        if(!mentioned) return message.channel.send(missingArgsEmbed); 
        let reason = args.slice(1).join(' ') 
        if(!reason) return message.channel.send(missingArgsEmbed); 
        var warningEmbed = new Discord.RichEmbed() 
            .setColor(embedColor)
            .setDescription(`**Admin: __${message.author.tag}__**`)
            .setTitle(`**Warn ${message.guild.name}**`)
            .addField('Warneado:', `${mentioned}, (${mentioned.id})`)
            .addField('Motivo:', `${reason}`)
            .setImage('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.tenor.com%2Fimages%2F4a16b44bcbcc59f5f076ce7a72d87310%2Ftenor.gif%3Fitemid%3D6098038&f=1&nofb=1')
            .setFooter(`En: ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now())}`)
            .setTimestamp();
        message.channel.send(warningEmbed);

        }else{
        message.channel.send('Tienes que tener el rol `Admin` para poder usar este comando');
        
        };
    }catch (err){ 
        message.channel.send('error');
        console.log(err);
    };
    }};