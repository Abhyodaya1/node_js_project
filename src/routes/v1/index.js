const express = require('express');

const {Infocontroller} = require('../../controllers');

const router = express.Router();

router.get('/info', (req,res)=>{
    return res.json({msg: "ok"});
})

module.exports = router;