const adminmiddlevar = async (req, res, next) => {
    try {
        const adminrole = req.user.isAdmin
        if (!adminrole) {
            return res.status(403).json({ message: "Access denied. User not an admin." })
        }
        // res.status(200).json({ msg: req.user.isAdmin })
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = adminmiddlevar