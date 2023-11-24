const Dealership = require('../models/dealership')


module.exports.newDealerForm =  (req, res) => {
        res.render('dealerships/new')
    }

module.exports.createDealer = async (req, res) => {
    const dealership = new Dealership(req.body.dealer);
    await dealership.save();
    res.send("Dealership registered");
}
    

