require('dotenv').config();
const { ApplicationCommandOptionType } = require('discord.js');
const fetch = require('node-fetch');
const Game = require('../../models/GameModel');

module.exports = {
    name:'pocket-watch',
    description:'see how much league somebody has played in the past week',
    options:[{
        name: 'name',
        description: 'the summoner name you want to pocket watch',
        type: ApplicationCommandOptionType.String,
        required: true
    }],
    //deleted: boolean
    //options: array of objects
    callback: async (client, interaction) => {
        if (!interaction.isChatInputCommand()) return;
        if (interaction.commandName === 'pocket-watch') {

            // placeholder message
            await interaction.deferReply();
            let response;
            const name = interaction.options.get('name').value;

            // retrieve puuid with summoner name
            response = await fetch(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${process.env.RIOT_API_KEY}`);
            data = await response.json();
            const puuid = data.puuid
            
            if(!puuid) { return interaction.editReply(`summoner **${name}** doesnt exist (on na servers)`); }

            // get current time and a week ago's time
            const currentTime = Math.floor(new Date().getTime()/1000);
            const weekAgoTime = currentTime-604800;
            let result = `within the past week, **${name}** has played`;

            // retrieve solo duo games in past 7 weeks
            response = await fetch(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?startTime=${weekAgoTime}&endTime=${currentTime}&count=100&queue=420&api_key=${process.env.RIOT_API_KEY}`);
            const soloDuoData = await response.json();
            if(soloDuoData.length){ result += `\n- **${soloDuoData.length}** solo/duo${soloDuoData.length===1 ? `` : `'s`}` } 

            // retrieve flex games in past 7 weeks
            response = await fetch(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?startTime=${weekAgoTime}&endTime=${currentTime}&count=100&queue=440&api_key=${process.env.RIOT_API_KEY}`);
            const flexData = await response.json();
            if(flexData.length){ result += `\n- **${flexData.length}** flex${flexData.length===1 ? `` : `'s`}` }

            // retrieve draft games in past 7 weeks
            response = await fetch(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?startTime=${weekAgoTime}&endTime=${currentTime}&count=100&queue=400&api_key=${process.env.RIOT_API_KEY}`);
            const draftData = await response.json();
            if(draftData.length){ result += `\n- **${draftData.length}** draft${draftData.length===1 ? `` : `'s`}` }

            // retrieve aram games in past 7 weeks
            response = await fetch(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?startTime=${weekAgoTime}&endTime=${currentTime}&count=100&queue=450&api_key=${process.env.RIOT_API_KEY}`);
            aramData = await response.json();
            if(aramData.length){ result += `\n- **${aramData.length}** aram${aramData.length===1 ? `` : `'s`}` }
            
            if(!(soloDuoData.length || flexData.length || draftData.length || aramData.length)) { return interaction.editReply(`**0** solo/duo, flex, draft, or aram games played in the past week on **${name}**`); }

            return interaction.editReply(`${result}`);
        }
    }
}