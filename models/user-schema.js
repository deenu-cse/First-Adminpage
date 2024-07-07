const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")

const userschema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})

userschema.methods.generatToken = async function () {
    try {
        return jwt.sign({
            userid: this._id.toString(),
            email: this.email,
            admin: this.isAdmin
        },
            process.env.jwt_key, {
            expiresIn: "30d",
        }
        )
    } catch (error) {
        console.error(error)
    }
}

const User = new mongoose.model("User", userschema)

module.exports = User