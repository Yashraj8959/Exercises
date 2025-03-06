const userModel = require("../models/userModel")
const jwt = require('jsonwebtoken');


module.exports.authUser = async (req, res, next) => {
    const token = req.cookies?.token
    //  || req.headers.authorization?.split(' ')[ 1 ];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, "yashrajSecretKey");
        req.user = await userModel.findById(decoded.id);
        next();
    } catch (err) {
        res.status(401).json({ message: 'Unauthorized' });
        console.log(err);
    }

}