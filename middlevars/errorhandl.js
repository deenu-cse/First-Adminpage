const errormiddleware = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Backend error"
    const extradetail = err.extradetail || "Error from backend"

    return res.status(status).json({ message, extradetail })
}

module.exports = errormiddleware