const express = require("express")
const bcrypt = require("bcryptjs")

const User = require('../models/user-schema')

const home = async (req, res) => {
    try {
        res.status(200).send("welcome in controller");
    } catch (error) {
        console.log(error);
    }
}

const reg = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body

        const userexist = await User.findOne({ email })
        if (userexist) {
            return res.status(400).json({ msg: "email already exist" })
        }

        const saltRound = 10
        const hashedPassword = await bcrypt.hash(password, saltRound);

        const usercreated = await User.create({ username, email, phone, password: hashedPassword });
        res.status(201).json({ ms: "Succesfull", token: await usercreated.generatToken(), userid: usercreated._id.toString() })
    } catch (error) {
        console.log(error)
    }
}


//login

const login = async (req, res) => {
    try {
        const { username, password, email } = req.body
        const userexist = await User.findOne({ email })

        if (!userexist) {
            res.status(400).json({ msg: "Invalid email" })
        }

        const ispasswordvalid = await bcrypt.compare(password, userexist.password)
        if (ispasswordvalid) {
            res.status(200).json({ ms: "login Succesfull", token: await userexist.generatToken(), userid: userexist._id.toString() })
        } else {
            res.status(401).json({ msg: "Invalid email or password" })
        }

    } catch (error) {
        console.error(error)
    }
}

module.exports = { home, reg, login };
