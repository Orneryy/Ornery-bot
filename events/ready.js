exports.run = async(client, message, args) => { 
        client.user.setPresence({ game: { name: "Sendo programado pelo ornery!", type:  1} });
}
