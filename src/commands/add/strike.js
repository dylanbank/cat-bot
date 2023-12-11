const Count = require('../../models/CountModel');
const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name:'strike',
    description:'keep count of strikes on hooliganry',
    //deleted: true,
    //options: array of objects
    options:[{
        name: 'culprit',
        description: 'the first name of the person that has said something out of line/touch',
        type: ApplicationCommandOptionType.String,
        required: true
    }],
    callback: async(client, interaction) => {
        if (!interaction.isChatInputCommand()) return;
        if (interaction.commandName === 'strike') {
            const culprit = interaction.options.get('culprit');
            const updatedCount = await Count.findOneAndUpdate({name: culprit.value.toLowerCase()}, {$inc : {count: 1}}, {upsert: true, returnNewDocument: true /*, new:true, setDefaultsOnInsert: true*/}).exec();
            var message;
            if(updatedCount){
                switch(updatedCount.count+1){
                    case 1:
                        message=`${culprit.value} is at 1 strike!`
                        break;
                    case 3:
                        message=`${culprit.value} is at 3 strikes! you are outa here!`
                        const setToZero= await Count.findOneAndUpdate({name: culprit.value.toLowerCase()}, {count: 0}).exec();
                        break;
                    default:
                        message = `${culprit.value} is at ${updatedCount.count+1} strikes!`
                        break;
                }
            }else{
                message=`${culprit.value} is at 1 strike!`
            }
            //console.log(updatedCount);
            //await updatedCount.save();
            return interaction.reply(message);
        }
    }
}