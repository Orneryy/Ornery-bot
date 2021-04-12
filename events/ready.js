exports.run = async(client, message, args) => { 
        client.user.setPresence({ game: { name: "Finalmente recuperei o controle", type:  1} });
}
