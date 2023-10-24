module.exports = (client, message) => {
    if(message.author.bot) 
        return;
    if(message.content==="meow") 
        message.reply(`meow`); 
}