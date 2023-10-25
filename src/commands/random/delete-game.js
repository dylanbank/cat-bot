require('dotenv').config();
const { ApplicationCommandOptionType } = require('discord.js');
const Game = require('../../models/GameModel');


module.exports = {
    name:'delete-game',
    description:'remove a game out of the game list',
    options:[{
        name: 'game',
        description: 'the game you want to delete',
        type: ApplicationCommandOptionType.String,
        required: true
    }],
    //deleted: boolean
    //options: array of objects
    callback: async (client, interaction) => {
        if (!interaction.isChatInputCommand()) return;
        if (interaction.commandName === 'delete-game') {
            const gameToDel = interaction.options.get('game');
            const query = {
                name: gameToDel.value
            }
            const present = await Game.findOne(query)
            console.log(present);
            if(!present){
                return interaction.reply(`game isn't in the choices`);
            } else {
                await Game.deleteOne(query);
                return interaction.reply(`game "${gameToDel.value}" has been deleted`);
            }
        }
    }
}