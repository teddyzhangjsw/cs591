
let express = require('express');
let router = express.Router();
const request = require('request');
let config = require('../config');


//GET method route
router.get('/get', function(req, res, next) {
    return new Promise(function (resolve, reject) {

        request(config.URL,function(error, res, body){
            if(error)
                reject (new Error(error))
            else{
                resolve(JSON.parse(body))
            }

        });
    })
        .then ((weather)=>res.render('response', JSON.parse(body).weather[0].description));
});

// POST method route
// router.post('/post', function(req, res, next) {
//     res.render('response',{text:req.body.name,length:req.body.name.length});
// });

module.exports = router;