const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    name: String,
    lastName: String,
    number: Number,
    nacionality: String,
    age: Number,
    weight: Number,
    category: String,
    position: String,
    skills: String,
    dominantLeg: String,
    goals: Number,
    assists: Number,
    cards: String,
    minutePlays: Number,
    rating: Number,
    titular:Boolean,
    matchs: [{ type: Schema.Types.ObjectId, ref: 'Matchs' }]
    

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});


const Players = mongoose.model('Players', playerSchema);
module.exports = Players;
