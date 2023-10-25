require('dotenv').config();
const { ApplicationCommandOptionType } = require('discord.js');
const Game = require('../../models/GameModel');

module.exports = {
    name:'add-game',
    description:'add a game to the list',
    options:[{
        name: 'game',
        description: 'the game you want to add',
        type: ApplicationCommandOptionType.String,
        required: true
    }],
    //deleted: boolean
    //options: array of objects
    callback: async (client, interaction) => {
        if (!interaction.isChatInputCommand()) return;
        if (interaction.commandName === 'add-game') {
            const gameToAdd = interaction.options.get('game');
            const query = {
                name: gameToAdd.value
            }
            const present = await Game.findOne(query)
            console.log(present);
            if(!present){
                const newGame = new Game(query);
                await newGame.save();
                return interaction.reply(`game "${gameToAdd.value}" added meow`);
            } else {
                return interaction.reply(`game "${gameToAdd.value}" is already in the list`);
            }
        }
    }
}