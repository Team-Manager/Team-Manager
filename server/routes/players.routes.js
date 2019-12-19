const express = require('express')
const router = express.Router()
const Players = require('../models/Players.model')
const Performance = require('../models/Performance.model')



router.get('/getAllPlayers', (req, res) => {
    Players.find()
        .populate("performance")
        .populate("matches")
        .then(allplayers => res.json(allplayers))
        .catch(err => console.log('DB error', err))
})

router.get('/:id', (req, res) => {
    const playersId = req.params.id

        .then(thePlayers => res.json(thePlayers))
        .catch(err => console.log('DB error', err))
})

router.post('/new', (req, res) => {
    const players = req.body
    console.log("SE SETA CREANDO", players)
    Players.create(players)
        .then(theNewPlayers => res.json(theNewPlayers))
        .catch(err => console.log('DB error', err))
})



router.post('/edit', (req, res) => {
    const { name, lastName, age, weight, category, position, skills, dominantLeg } = req.body.player
    console.log(name, lastName, age, weight, category, position, skills, dominantLeg)
    // console.log(req.body)
    Players.findByIdAndUpdate(req.body.playerID, { name, lastName, age, weight, category, position, skills, dominantLeg }, { new: true })
        .then(player => {
            console.log("ESTE ES EL NUEVO PLAYER", player)
            return res.json(player)
        })
        .catch(err => console.log('error!!', err))
})

router.get("/delete/:id", (req, res) => {
    Players.findByIdAndDelete(req.params.id)
        .then(() => res.json({ message: 'delete ok' }))
        .catch(err => console.log(err));
});

router.post("/addToMatch", (req, res) => {
    const { goals, assists, minutePlays, cards, rating } = req.body.player
    // console.log(req.body)

    Performance.create({ goals, assists, minutePlays, cards, rating, match: req.body.matchID })
        .then(performance => {

            Players.findByIdAndUpdate(req.body.playerID, { $addToSet: { performance: performance._id, matchs: req.body.matchID } }, { new: true })
                .populate("performance")
                .populate("matchs")
                .then(player => {

                    return res.json({ player, performance })

                })
                .catch(err => console.log(err))
        })
        .catch(err => console.log('error!!', err))

})






module.exports = router