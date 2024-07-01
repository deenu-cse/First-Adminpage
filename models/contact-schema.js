const mongoose = require("mongoose")


const contactschema = new mongoose.Schema({
    usernme: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    },
})

const Contact = new mongoose.model("Contact", contactschema)

module.exports = Contact