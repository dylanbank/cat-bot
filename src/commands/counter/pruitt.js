module.exports = {
    name:'pruitt',
    description:'\"whats the bruh count at now?\"',
    //deleted: boolean
    //options: array of objects
    
    callback: (client, interaction) => {
        if (!interaction.isChatInputCommand()) return;
    
        if (interaction.commandName === 'pruitt') {
            return interaction.reply('+ 1 bruh');
        }
    }
}