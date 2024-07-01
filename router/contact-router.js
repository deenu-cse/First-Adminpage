const express = require("express")
const router = express.Router()
const contactform = require("../controllers/contact-controller")

router.post("/contact", contactform)

module.exports = router