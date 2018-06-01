exports.run = (client , message , args) => { 
    const Discord = require ('discord.js')      
    var PingEmbed = new Discord.RichEmbed()
        .setColor('#4b42f4')
        .setTitle('Ping :ping_pong:')
        .setDescription('Pong!:' + `${Date.now() - message.createdTimestamp}`+ 'ms')//comando para latencia do bot
        .setTimestamp(new Date())
        //Fim do embed
        message.channel.sendMessage(PingEmbed)
    }