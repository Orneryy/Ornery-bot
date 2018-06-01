exports.run = (client ,message , args) =>{
    let sicon = message.guild.iconUrl;
    message.channel.sendMessage({
      "embed":{
        "description": ':bookmark_tabs:**INFORMAÇÃO DO SERVER**:bookmark_tabs:',
          "color": 55512,
            "timestamp": new Date(),
            "fields":[
            {
              "name":"Nome",//Nome do server
              "value":message.guild.name
            },
            {
              "name":'Você entrou em',
              "value": message.member.joinedAt//Quando Você entrou
            },
            {
              "name":'Foi criado em',
              "value":message.guild.createdAt
            },
            {
              "name":"Atualmente possui esta quantidade de membros",
              "value":message.guild.memberCount//Quantidade de membros
            }
            ],
              "footer": {
                "icon_url": message.author.displayAvatarURL,
                  "text": message.author.username
      
    }}})
      
    
      
      
  }