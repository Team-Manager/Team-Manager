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
    Players.findById(playersId)
        .then(thePlayers => res.json(thePlayers))
        .catch(err => console.log('DB error', err))
})
router.post('/new', (req, res) => {
    const players = req.body
    Players.create(players)
        .then(theNewPlayers => res.json(theNewPlayers))
        .catch(err => console.log('DB error', err))
})
module.exports = router