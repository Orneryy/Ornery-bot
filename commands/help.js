exports.run = (client , message , args)=>{
   
    //Inicio do Embed          
  
 (message.channel.send(message.channel.send({embed: {//Exemplo de embed feito pelo anidiots  
    color: 3447003,//Cor da barra lateral do embed
    author: {
      name: client.user.username,//Nome do usuario
      icon_url: client.user.avatarURL//O icone será o mesmo do usuario que executou o comando
    },
    title: "Comandos",//Titulo do embed
    //url: "http://google.com",
    description: "Meu criador estra trabalhando para trazer cada vez mais novidades",//Descrição do embed
    fields: [{
        name: "o!help",//Titulo
        value: "Ele ira mostrar os meus comandos"//Descrição
      }
    ],
    timestamp: new Date(),
    footer: {//Rodape do embed
      icon_url: client.user.avatarURL,//Icone do bot client=bot
      text: "©๖̶̶̶ۣۣۜۜ͜ζ͜͡オリリくん (Ornery)#6770"
    }
  }
})))

}
