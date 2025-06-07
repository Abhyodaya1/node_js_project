const express = require('express')

const {airplanecontroller} = require('../../controllers')
const {Airplanemiddleware} = require('../../middlewares')
const router = express.Router()

router
 .post('/', 
    Airplanemiddleware.validatecreaterequest,
    airplanecontroller.createAirplane);

router
 .get('/',
    airplanecontroller.getairplanes);

router
 .get('/:id',
    airplanecontroller.getairplane);

router.delete('/:id',
    airplanecontroller.destroyairplane);


module.exports = router;