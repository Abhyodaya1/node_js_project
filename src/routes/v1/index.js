const express = require('express');

const {Infocontroller} = require('../../controllers');

const airplanesroutes = require('./airplane-routes');

const router = express.Router();

router.use('/airplanes',airplanesroutes);

router.get('/info', (req,res)=>{
    return res.json({msg: "ok"});
})

module.exports = router;