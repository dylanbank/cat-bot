require('dotenv').config();
const { ApplicationCommandOptionType } = require('discord.js');
const Game = require('../../models/GameModel');

module.exports = {
    name:'list-games',
    description:'display list of games',
    deleted: false,
    //options: array of objects
    
    callback: async (client, interaction) => {
        if (!interaction.isChatInputCommand()) return;
        if (interaction.commandName === 'list-games') {
            var games = [];
            const result = await Game.find();
            for(const game of result){
                games.push(game.name);

            }
            games.sort();
            newLineGames = games.join("\n");
            return interaction.reply(newLineGames);
            
        }
    }
}