const Count = require('../../models/CountModel');

module.exports = {
    name:'bruh',
    description:'\"whats the bruh count at now?\"',
    //deleted: true,
    //options: array of objects
    
    callback: async (client, interaction) => {
        if (!interaction.isChatInputCommand()) return;
        
        if (interaction.commandName === 'bruh') {
            const updatedCount = await Count.findOneAndUpdate({name: "pruitt"}, {$inc : {count: 1}}).exec();
            console.log(updatedCount);
            await updatedCount.save();
            return interaction.reply(`pruitt is at ${updatedCount.count+1} bruh!`);
        }
    }
}