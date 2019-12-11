const express = require('express')
const router = express.Router()
const Matchs = require('../models/Matchs.model')


router.get('/getAllMatchs', (req, res) => {
    Matchs.find()
        .then(allmatchs => res.json(allmatchs))
        .catch(err => console.log('DB error', err))

})

router.get('/:id', (req, res) => {
    const matchsId = req.params.id
    Matchs.findById(matchsId)
        .then(theMatchs => res.json(theMatchs))
        .catch(err => console.log('DB error', err))
})


router.post('/new', (req, res) => {
    const matchs = req.body
    Matchs.create(matchs)
        .then(theNewMatchs => res.json(theNewMatchs))
        .catch(err => console.log('DB error', err))
})

module.exports = router