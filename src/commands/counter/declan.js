module.exports = {
    name:'declan',
    description:'\"whats the bool count at now?\"',
    //deleted: boolean
    //options: array of objects
    
    callback: (client, interaction) => {
        if (!interaction.isChatInputCommand()) return;
    
        if (interaction.commandName === 'declan') {
            return interaction.reply('+ 1 bool');
        }
    }
}