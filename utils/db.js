require("dotenv").config()
const mongoose = require("mongoose")



const url = process.env.Mongodb_url

const connectdb = async() => {
    try {
        await mongoose.connect(url)
        console.log("le ho gya connect")
    } catch (error) {
        console.error("connection failed")
        process.exit(0)
    }
}

module.exports = connectdb