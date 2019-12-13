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



module.exports = router