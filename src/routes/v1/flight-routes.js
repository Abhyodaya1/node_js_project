const express = require('express')

const {fightcontroller} = require('../../controllers')
const {flightmiddlewares} = require('../../middlewares')

const router = express.Router()

router.post('/',
    flightmiddlewares.validatecreaterequest,
    fightcontroller.Createflights
);

router.get('/',
    fightcontroller.getallflights
)

module.exports = router;
