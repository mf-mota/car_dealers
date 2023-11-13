const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const DealershipSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: String,
    phoneNumber: {
        type: String,
        required: true
    },
    emailAddress: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Dealership', DealershipSchema)