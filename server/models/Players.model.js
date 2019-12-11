const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    name: String,
    lastName: String,
    nacionality: String,
    age: Number,
    weight: Number,
    category: String,
    position: String,
    skills: String,
    dominantLeg: String
       
    

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});


const Players = mongoose.model('Players', playerSchema);
module.exports = Players;
