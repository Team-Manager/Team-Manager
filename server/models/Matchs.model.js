const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Players = require("./Players.model")

const matchSchema = new Schema({
    clasification: Number,
    match: String,
    rival: String,
    goalslocal: Number,
    goalsRival: Number,
    season: Number,
    players: [{ type: Schema.Types.ObjectId, ref: 'Players' }]

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const Matchs = mongoose.model('Match', matchSchema);
module.exports = Matchs;
