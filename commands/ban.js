module.exports = {
    name: 'ban',
    description: "Banea",
execute(message, args){
    try {
        const Discord = require('discord.js');
        if (message.member.roles.find("name", "Admin")){
            var mentioned = message.mentions.users.first();
            let reason = args.slice(1).join(' ');
            message.guild.ban(mentioned, {reason: reason});
            var warningEmbed = new Discord.RichEmbed()
                .setTitle('**Ban**')
                .setDescription(`**Admin: __${message.author.tag}__**`)
                .addField('Baneado:', `${mentioned}, (${mentioned.id})`)
                .addField('Motivo:', `${reason}`)
                .setColor('#22eef9')
                .setImage('https://media.giphy.com/media/lTRMukgDPEoegkpXD1/giphy.gif');
            message.channel.send(warningEmbed)
          }else{
           message.channel.send('Tienes que tener el rol `Admin` para poder usar este comando');
          };
    }catch(err) {message.channel.send('error')};
}};
