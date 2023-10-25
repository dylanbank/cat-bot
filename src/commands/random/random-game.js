require('dotenv').config();
const { ApplicationCommandOptionType } = require('discord.js');
const Game = require('../../models/GameModel');

module.exports = {
    name:'random-game',
    description:'get a random game to play',
    //deleted: boolean
    //options: array of objects
    callback: async (client, interaction) => {
        if (!interaction.isChatInputCommand()) return;
        if (interaction.commandName === 'random-game') {
            var games = [];
            const result = await Game.find();
            for(const game of result){
                games.push(game.name);

            }
            const chosenGame = games[Math.floor(Math.random() * games.length)]
            return interaction.reply(chosenGame);
        }
    }
}