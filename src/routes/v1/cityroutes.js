const express = require('express');

const { citycontroller } = require('../../controllers');
const {citymiddleware} = require('../../middlewares')


const router = express.Router();
router
  .post('/',
    citymiddleware.validatecreaterequest,
    citycontroller.createcity);

router
  .delete('/id',
    citycontroller.destroycity)

module.exports = router;