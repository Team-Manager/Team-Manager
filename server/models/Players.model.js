const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Matchs = require("./Matchs.model")
const Performance = require("./Performance.model")



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

    matchs: [{ type: Schema.Types.ObjectId, ref: 'Matchs' }],
    performance: [{ type: Schema.Types.ObjectId, ref: 'Performance' }],


}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});


const Players = mongoose.model('Players', playerSchema);
module.exports = Players;
