const express = require('express');

const {Infocontroller} = require('../../controllers');

const airplanesroutes = require('./airplane-routes');
const cityroutes = require('./cityroutes');
const city = require('../../models/city');

const router = express.Router();

router.use('/airplanes',airplanesroutes);
router.use('/cities', cityroutes);

router.get('/info', (req,res)=>{
    return res.json({msg: "ok"});
})

module.exports = router;