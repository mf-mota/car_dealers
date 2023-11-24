const express = require('express')
const router = express.Router()
const dealership = require('../controllers/dealership')


router.route('/')
    .post(dealership.createDealer)

router.get('/new', dealership.newDealerForm)

router.use('*', dealership.createDealer)
module.exports = router