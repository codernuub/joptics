const Admin = require('../model/admin');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        const admin = await Admin.create({
            name: req.body.name,
            username: req.body.username,
            password: req.body.password
        });
        const token = jwt.sign({ adminId: admin._id }, process.env.TOKEN_SECRET, {
            expiresIn: 15 * 60 * 1000
        });

        return res.cookie("token", token, {
            maxAge: 15 * 60 * 1000,
            expires: 15 * 60 * 1000,
            httpOnly: true
        }).json({ status: "success", message: "successfully registered" })

    } catch (err) {
        res.status(400).json({ status: "fail", message: err.message })
    }
}

exports.login = async (req, res) => {
    try {
        const admin = await Admin.findOne({ username: req.body.username });
        if (!admin)
            return res.status(400).json({ status: "fail", message: "Admin not found" });
        if (!(admin.password === req.body.password))
            return res.status(400).json({ status: "fail", message: "Incorrect password" });

        const token = jwt.sign({ adminId: admin._id }, process.env.TOKEN_SECRET, {
            expiresIn: 15 * 60 * 1000
        });

        return res.cookie("token", token, {
            maxAge: 15 * 60 * 1000,
            expires: 15 * 60 * 1000,
            httpOnly: true
        }).json({ status: "success", message: "logged In" })

    } catch (err) {
        res.status(400).json({ status: "fail", message: err.message })
    }
}

exports.preventUnauthApiAccess = (req, res, next) => {
    const token = req.cookies.token;
    if(token){
    const payload = jwt.decode(token, process.env.TOKEN_SECRET);
    if (payload.adminId)
        return next();
    }
    return res.status(401).json({ status: "fail", message: "Unauthorized Access! please login" });
}

exports.preventUnauthPageAccess = (req, res, next) => {
    const token = req.cookies.token;
    if(token) {
    const payload = jwt.decode(token, process.env.TOKEN_SECRET);
    if (payload.adminId)
        return next();
    }
    return res.redirect('/admin/login');
}