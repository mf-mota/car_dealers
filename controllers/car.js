const Car = require('../models/car')
const Dealership = require('../models/dealership')


module.exports.index = async (req, res) => {
    const cars = await Car.find({})
    res.render('cars/index', {cars})
}

module.exports.renderCreateForm = async (req, res) => {
    const dealerships = await Dealership.find()
    res.render('cars/new', {dealerships})
}

module.exports.display = async (req, res) => {
    const car = await Car.findById(req.params.id)
    res.render('cars/display', {car})
}

module.exports.newCar = async (req, res, next) => {
    const car = new Car(req.body.car);
    car.images = res.locals.urls;
    await car.save();
    // req.flash('success', 'Successfuly added car');
    res.redirect(`/car/${car.id}`);
}

