const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const matchSchema = new Schema({
    goals: Number,
    clasification: Number,
    match: String,
    result: Number,
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
