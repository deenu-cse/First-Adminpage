const express = require("express")
const bcrypt = require("bcryptjs")

const User = require('../models/user-schema');
const Service = require("../models/service-schema");

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

//user data

const user = async (req, res) => {
    try {
        const userdata = req.user
        return res.status(200).json({ msg: userdata })
    } catch (error) {
        console.log("from user", error)
    }
}

//service


const Services = async (req, res) => {
    try {
        const responce = await Service.find()
        res.status(200).json(responce)
    } catch (error) {
        console.log(error)
    }
}


//Admin

const getuser = async (req, res) => {
    try {
        const userdata = await User.find({}, { password: 0 })
        if (!userdata || userdata === 0) {
            return res.status(404).json({ message: "No user found" })
        }
        return res.status(200).json(userdata)
    } catch (error) {
        next(error)
    }
}

//Delete user

const userdelete = async (req, res) => {
    try {
        const id = req.params.id
        await User.deleteOne({ _id: id })
        return res.status(200).json({ message: "User deleted successfully" })
    } catch (error) {
        next(error)
    }
}

//Edite user

const useredite = async (req, res) => {
    try {
        const id = req.params.id
        const data = await User.findOne({ _id: id }, { password: 0 })
        if (!data) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json(data)
    } catch (error) {
        next(error)
    }
}

//update user

const userupdate = async (req, res) => {
    try {
        const id = req.params.id
        const updateuserdata = req.body
        const updateuser = await User.updateOne({ _id: id }, { $set: updateuserdata })
        return res.status(200).json(updateuser)
    } catch (error) {
        next(error)
    }
}

module.exports = { home, reg, login, user, Services, getuser, userdelete, useredite, userupdate };
