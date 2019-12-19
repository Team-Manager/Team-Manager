const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Players = require("./Players.model")

const matchSchema = new Schema({
    clasification: Number,
    match: String,
    rival: String,
    goalsLocal: Number,
    goalsRival: Number,
    season: Number,
    players: [{ type: Schema.Types.ObjectId, ref: 'Players' }],
    date: Date,
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const Matchs = mongoose.model('Matchs', matchSchema);
module.exports = Matchs;
