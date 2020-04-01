module.exports = {
    name: 'unban',
    description: 'quita el ban',
execute(message, args) {
    const Discord = require('discord.js');
    try {
        if (message.member.roles.find("name", "Admin")){
            var id = message.content.slice(13);
            var unbanEmbed = new Discord.RichEmbed()
                .setTitle('**Unban**')
                .setDescription(`**Admin: __${message.author.tag}__**`)
                .addField('Unban:', `<@${id}>, (${id})`)
                .setColor('#22eef9')
                .setImage('https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fblog-imgs-43.fc2.com%2Fh%2Fa%2Fc%2Fhackmemoforme%2Funbanned.png&f=1&nofb=1');
            message.channel.send(unbanEmbed)
            message.guild.unban(id, {reason: 'Unbaned'});
          }else{
           message.channel.send('Tienes que tener el rol `Admin` para poder usar este comando');
          };
    }catch(err) {message.channel.send('error'), console.log(err)};
}
}


