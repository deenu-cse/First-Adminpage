const mongoose = require("mongoose")

const serviceschema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    catImg: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const Service = new mongoose.model("Service",serviceschema)

module.exports = Service