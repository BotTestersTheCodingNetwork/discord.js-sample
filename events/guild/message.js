require('dotenv').config

module.exports = async (Discord, client, message) => {
    let prefix = process.env.PREFIX
    const member = message.member
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));
    
    //Makes sure the bot does not crash becuase of an error in your commands
    try {
        command.execute(client, message, args, Discord, prefix);
        //You might want to change the variables above to match what you want
    } catch (err) {
        message.reply("Cant execute command please try again later");
        console.log(err);
    }
}
