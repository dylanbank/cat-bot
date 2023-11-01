require('dotenv').config();

module.exports = {
    name:'coin-flip',
    description:'flip a coin',
    //deleted: boolean
    //options: array of objects
    callback: async (client, interaction) => {
        if (!interaction.isChatInputCommand()) return;
        if (interaction.commandName === 'coin-flip') {
            const side = Math.floor(Math.random() * 2);
            return interaction.reply(side ? 'tails' : 'heads');
        }
    }
}