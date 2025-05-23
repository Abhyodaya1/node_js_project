const express = require('express')

const {airplanecontroller} = require('../../controllers')
const router = express.Router()

router.post('/', airplanecontroller.createAirplane)

module.exports = router;