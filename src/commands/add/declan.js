const Count = require('../../models/CountModel');

module.exports = {
    name:'bool',
    description:'\"whats the bool count at now?\"',
    //deleted: true,
    //options: array of objects
    
    callback: async(client, interaction) => {
        if (!interaction.isChatInputCommand()) return;
        
        if (interaction.commandName === 'bool') {
            const updatedCount = await Count.findOneAndUpdate({name: "declan"}, {$inc : {count: 1}}).exec();
            console.log(updatedCount);
            await updatedCount.save();
            return interaction.reply(`declan is at ${updatedCount.count+1} bool!`);
        }
    }
}