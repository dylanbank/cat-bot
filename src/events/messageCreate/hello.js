module.exports = (client, message) => {
    if(message.author.bot) 
        return;
    if (message.content.includes('hello'))
        message.reply(`hello ${message.author.username}`);
}