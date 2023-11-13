const Car = require('../models/car')

module.exports.index = async (req, res) => {
    const cars = await Car.find({})
    res.render('cars/index', {cars})
}

module.exports.renderCreateForm = (req, res) => {
    res.render('cars/new')
}

module.exports.display = async (req, res) => {
    const car = await Car.findById("65522f8ee6730202769bf8d0")
    res.render('cars/display', {car})
}

module.exports.newCar = async (req, res, next) => {
    const car = new Car(req.body.car);
    car.images = res.locals.urls;
    await car.save();
    // req.flash('success', 'Successfuly added car');
    res.redirect(`/car/${car.id}`);
}

