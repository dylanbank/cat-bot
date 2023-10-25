const { Schema, model } = require('mongoose');

const gameScheme = new Schema({
    name:{
        type: String,
        required: true
    }
});

module.exports = model('Game', gameScheme)