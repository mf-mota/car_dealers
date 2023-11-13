const express = require('express')
const router = express.Router()
const cars = require('../controllers/car')
const {uploadB2, uploadMulter} = require('../backblaze')

router.route('/')
    .get(cars.index)
    .post(uploadMulter, uploadB2, cars.newCar)


router.get('/new', cars.renderCreateForm)

router.get('/:id', cars.display)

module.exports = router