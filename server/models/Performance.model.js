const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const performanceSchema = new Schema({
    goals: Number,
    assists: Number,
    cards: String,
    minutePlays: Number,
    rating: Number,
    titular: Boolean,

    matchs: [{ type: Schema.Types.ObjectId, ref: 'Matchs' }],



}, {
    timestamps: {
         createdAt: 'created_at',
         updatedAt: 'updated_at'
        }


})

const Performance = mongoose.model('Performance', performanceSchema);
module.exports = Performance;