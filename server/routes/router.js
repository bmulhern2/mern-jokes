let express = require('express')
let router = express.Router()
let cors = require('cors')
let bodyParser = require('body-parser')

let Joke = require('../models/model')

router.use(cors())
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

router.get('/jokes', function(req, res) {
    Joke.find({}, function(err, data) {
        if (!err) res.json(data)
        else console.log(err)
    })
})
router.get('/joke/:_id', function(req, res) {
    Joke.findOne({ id: req.params.id }, function(err, data) {
        if (err) console.log(err)
        else res.json(data)
    })
})
router.post('/jokes', cors(), function(req, res) {
    Joke.create(req.body)
})
router.put('joke/:id', function(req, res) {
    console.log(req.params.id)
    /* Joke.findByIdAndUpdate(req.params.id, req.body, function(err, data) {
        if (err) console.log(err)
        else res.json(data)
    }) */
})
router.delete('joke/:_id', function(req, res) {
    Joke.findByIdAndRemove(req.params.id, req.body, function(err, data) {
        if (err) console.log(err)
        else res.json(data)
    })
})

module.exports = router