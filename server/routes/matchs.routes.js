const express = require('express')
const router = express.Router()
const Matchs = require('../models/Matchs.model')
const Player = require('../models/Players.model')


router.get('/getAllMatchs', (req, res) => {
    Matchs.find()
        .then(allmatchs => res.json(allmatchs))
        .catch(err => console.log('DB error', err))

})

router.get('/playersMatch/:id', (req, res) => {
    console.log("ES ESTA SI")
    const matchsId = req.params.id
    console.log(req.params.id)
    Matchs.findById(matchsId)
        .populate("players")
        .then(theMatchs => {
            console.log(theMatchs)
            return res.json(theMatchs)
        })
        .catch(err => console.log('DB error', err))
})


router.post('/new', (req, res) => {
    const matchs = req.body
    Matchs.create(matchs)
        .then(theNewMatchs => res.json(theNewMatchs))
        .catch(err => console.log('DB error', err))
})

router.post('/edit', (req, res) => {
    const { goals, clasification, match, result, season } = req.body.match
    Matchs.findByIdAndUpdate(req.body.matchID, { goals, clasification, match, result, season }, { new: true })
        .then(match => { res.json(match) })
        .catch(err => console.log('error!!', err))
})

router.get("/delete/:id", (req, res) => {
    Matchs.findByIdAndDelete(req.params.id)
        .then(() => res.json({ message: 'delete ok' }))
        .catch(err => console.log(err));
});

router.get("/playersMatch/:id", (req, res) => {
    console.log(req.params)
    Matchs.findById(req.params.id)
        .then(match => {
            console.log(match)
            res.json(match)
        })
        .catch(err => console.log(err));
});
router.post("/playersMatch/editMatch", (req, res) => {


    Matchs.findByIdAndUpdate(
        req.body.matchID,
        {
            $push: {
                players: {
                    $each: req.body.players,
                }
            }
        }, { new: true }

    ).populate("players")
        .then(match => {

            return res.json(match)
        }).catch(err => console.log(err))

    // model.find({
    //     '_id': {
    //         $in: [
    //             mongoose.Types.ObjectId('4ed3ede8844f0f351100000c'),
    //             mongoose.Types.ObjectId('4ed3f117a844e0471100000d'),
    //             mongoose.Types.ObjectId('4ed3f18132f50c491100000e')
    //         ]
    //     }
    // }, function (err, docs) {
    //     console.log(docs);
    // });


    // const {clasification, match, rival, season } = req.body.match
    // Matchs.findById(req.body.matchID, { clasification, match, rival, season }, { new: true })
    //     .then(match => { res.json(match) })
    // .catch(err => console.log(err));
})


module.exports = router