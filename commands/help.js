module.exports = {
    name: 'help',
    description: "Ayuda e informacion.",
    execute(message, args, bot){        
        const Discord = require('discord.js');
        let bicon = bot.user.displayAvatarURL;
        var helpembed = new Discord.RichEmbed()
        .setColor('#ff0000')
        .setThumbnail(bicon)
        .setTitle(`Help`)
        .setDescription(`**Comandos disponibles:**`)
        .addField(`**Prefijo:**`, '`!cuasi `')
        .addField('**Bot:**', '`!cuasi mipapi` `!cuasi micodigo`')
        .addField('**Moderacion:** **requieren el rol __Admin__*', '`!cuasi condenar` `!cuasi warn` `!cuasi ban` `!cuasi unban` `!cuasi clear`')
        .addField('**Util:**', '`!cuasi help` `!cuasi serverinfo` `!cuasi clanes`')
        .addField('**Varios:**', '`!cuasi say` `!cuasi tonto` `!cuasi cuasi` `!cuasi teshin`')
        .setFooter(`Para info detallada de cada comando usa: !cuasi help <comando>`);

        if (!args[1]) message.author.send(helpembed);
        if (!args[1]) message.channel.send('Revisa tus mensajes privados.');
        switch(args[1]){
            case 'unban':
                message.channel.send(' `!cuasi ban <id_user>`.');
            break;

            case 'ban':
                message.channel.send('Sintaxis ban: `!cuasi ban <@user> <motivo/motivos>`.');
            break;

            case 'mipapi':
                message.channel.send('Muestra informacion de mi papi');
            break;

            case 'micodigo':
                message.channel.send('Mustra el enlace con el codigo fuente del bot.');
            break;

            case 'serverinfo':
                message.channel.send('Muestra informacion del servidor.');
            break;

            case 'clanes':
                message.channel.send('Clanes de Golden Exilie.');
            break;

            case 'warn':
                message.channel.send('Avisa a un miembro, parecido al `!cuasi ban` pero sin baneo. Uso: `!cuasi warn <@User> <Motivo>`');
            break;

            case 'tonto':
                message.channel.send('s3gg');
            break;

            case 'say':
                message.channel.send('Repite lo que el usuario ha escrito despues del `!cuasi say `');
            break;

            case 'cuasi':
                message.channel.send('Hace falta?');
        }}};