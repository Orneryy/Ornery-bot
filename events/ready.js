exports.run = async(client, message, args) => { 
        client.user.setPresence({ game: { name: "Use o!help", type:  1} });
}
