require("dotenv").config()
const jwt = require("jsonwebtoken")
const User = require("../models/user-schema")


const Authmiddlevar = async (req, res, next) => {
  const token = req.header("Authorization")
  if (!token) {
    return res.status(401).json({ msg: "Token not provided" })
  }

  const jwttoken = token.replace("Bearer ", "")
  console.log("your token", jwttoken)

  try {

    const isvarified = jwt.verify(jwttoken, process.env.jwt_key)

    const userdata = await User.findOne({ email: isvarified.email }).select({
      password: 0,
    })
    console.log(userdata)

    req.user = userdata
    req.token = token
    req.userid = userdata._id

  } catch (error) {
    return res.status(401).json({ msg: "Invalid token" })
  }
  next()
}

module.exports = Authmiddlevar