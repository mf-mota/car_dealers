const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const CarSchema = new Schema({
    brand: {
        type: String,
        maxLength: 30,
        required: true
    },
    mileage: Number,
    model: {
        type: String,
        maxLength: 30,
        required: true
    },
    registration: {
        type: String,
        maxLength: 10,
    },
    description: {
        type: String
    },
    year: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    fuel: {
        type: String,
        enum: ["Diesel", "Electric", "Petrol", "LPG", "Hybrid"]
    },
    dealership: {
        type: Schema.Types.ObjectId,
        ref: 'dealership'
    },
    images: [String]
})

module.exports = mongoose.model('Car', CarSchema)