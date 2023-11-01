module.exports = (client, message) => {
    if(message.author.bot) 
        return;
    if(message.content.includes("meow")) 
        message.reply(`meow`); 
}