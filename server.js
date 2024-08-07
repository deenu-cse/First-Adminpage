require("dotenv").config()
const express = require("express")
const app = express()
const authRoute = require('./router/auth-router')
// const contactRoute = require('./router/contact-router')
const connectdb = require('./utils/db')
const errormiddleware = require("./middlevars/errorhandl")
const cors = require("cors")
const serviceroute = require('./router/service-router')


const corsoptions = {
    origin: "http://localhost:5173",
    methods: "GET,POST,DELETE,PUT,PATCH,HEAD",
    CredentialS: true
}

app.use(cors(corsoptions))
app.use(express.json())

app.use("/api/router", authRoute)
// app.use("/api/form", contactRoute)

app.use(errormiddleware)

app.get('/', (req, res) => {
    res.status(200).send("welcom in mern")
})

connectdb().then(() => {
    app.listen(3000, () => {
        console.log("your port 3000")
    })
})