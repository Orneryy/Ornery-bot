exports.run = (client , message, args) =>{
    const Discord = require('discord.js');
    var CriadorEmbed = new Discord.RichEmbed()
            .setColor('#4b42f4')
            .setDescription('test')
            


message.channel.sendMessage(CriadorEmbed);

}