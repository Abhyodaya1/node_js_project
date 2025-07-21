const express = require('express');

const {Infocontroller } = require('../../controllers');

const router = express.Router();

const booking = require('./booking-routes')

router.get('/info', (req,res)=>{
    return res.json({msg: "ok"});
})

router.use('/booking', booking);

module.exports = router;