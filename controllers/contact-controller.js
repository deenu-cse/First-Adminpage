const Contact = require("../models/contact-schema")

const contactform = async (req, res) => {
    try {
        const response = req.body
        await Contact.create(response)
        return res.status(200).json({ msg: "contact send succesfully" })
    } catch (err) {
        return res.status(500).json({ msg: "contact nhi bna" })
    }
}

module.exports = contactform;