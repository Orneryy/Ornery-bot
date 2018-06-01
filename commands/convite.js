exports.run= (client , message , args) =>{
    const Discord = require('discord.js')
    //Incio do Embed
var InviteEmbed = new Discord.RichEmbed()
    .setColor('#4b42f4')
    .setTitle('Me convide para o seu server!:')
    .setDescription('[Clique aqui](https://discordapp.com/oauth2/authorize?client_id=452156027715059732&scope=bot&permissions=0)')
    .setTimestamp(new Date())
    //Fim do embed
    message.channel.sendMessage(InviteEmbed);
}