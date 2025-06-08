const express = require('express')

const {airportcontroller} = require('../../controllers')
const {airportmiddlewares} = require('../../middlewares')

const router = express.Router()

router.post('/',
    airportmiddlewares.validatecreaterequest,
    airportcontroller.CreateAirports
);

router
 .get('/',
    airportcontroller.Getairports);

router
 .get('/:id',
    airportcontroller.Getairport);
router.delete('/:id',
  airportcontroller.Destroyairports);

module.exports = router;
