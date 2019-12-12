const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const matchSchema = new Schema({
    goals: Number,
    assists: Number,
    rating: Number,
    clasification: Number,
    minutePlays: Number,
    imgName:{
    type: String,
    default: "/images/mathImages/default.jpg"
},
    imgPath: String,
    players: [{ type: Schema.Types.ObjectId, ref: 'players' }]



}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const Matchs = mongoose.model('Match', matchSchema);
module.exports = Matchs;