let express = require('express');
let router = express.Router();
const db = require('../mongo/mongo');
const request = require('request');
let config = require('../config');


db.connect((err, client) => {
    if (err) {
        console.log(`ERR: ${err}`);
    } else {
        console.log(`Connected`);
    }
});

//GET method route
// router.get('/get', function(req, res, next) {
// });

//POST method route
router.post('/post', function(req, res, next) {
    return new Promise(function (resolve, reject) {

        let mongo = db.getDB();
        mongo.collection('weather').find({name: req.params.name}).toArray(function (err, docs) {
            let display;
            if (docs.length === 0) {
                return new Promise(function (resolve, reject) {
                    request(config.URL, function (error, res, body) {
                        if (error)
                            reject(new Error(error))
                        else {
                            resolve(JSON.parse(body))
                        }
                    }).then((response) => {
                        display = {
                            city: response.name,
                            description: response.description,
                            fromCache: false
                        };

                        mongo.collection('weather').insertOne(req.body, function (err, r) {
                            res.send(display);
                        });
                    })
                })
            } else {
                display = docs[0];
                display.fromCache = true;
                res.send(display);
            }
        })
    })
})

module.exports = router;
