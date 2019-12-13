const express = require('express')
const router = express.Router()
const Players = require('../models/Players.model')


router.get('/getAllPlayers', (req, res) => {
    Players.find()
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
    Players.create(players)
        .then(theNewPlayers => res.json(theNewPlayers))
        .catch(err => console.log('DB error', err))
})



router.post('/edit', (req, res) => {
    const { name, lastName, age, weight, category, position, skills, dominantLeg } = req.body.player
    console.log(req.body)
    Players.findByIdAndUpdate(req.body.playerID, { name, lastName, age, weight, category, position, skills, dominantLeg }, { new: true })
        .then(player => {
            console.log(player)
            res.json(player)
        })
        .catch(err => console.log('error!!', err))
})

router.get("/delete/:id", (req, res) => {
    Players.findByIdAndDelete(req.params.id)
        .then(() => res.json({ message: 'delete ok' }))
        .catch(err => console.log(err));
});







module.exports = router