/*
Please use this and example as it is what the command handler uses
the name of the file must be the name as the command
the name field must also be the same
you can have alises as many as you want or none atall
decription is optional
is you want async you put async before the execute
*/

module.exports = {
    name: 'ping',
    aliases: ['ping2', 'ping1'],
    description: "Ping command",
    /* async */ execute(client, message, args){       
        message.channel.send(`Your current ping is ${client.ws.ping} ping`)
        .then(msg => msg.delete({timeout: 60000}));   //deltes the message 1 minute after it has been sent      
    }
}