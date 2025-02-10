const userModel = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


module.exports.getRegister = (req, res) => {
    res.render('register')
}

module.exports.postRegister = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!password) {
            return res.status(400).send('Password is required')
        }
        const hashPassword = await bcrypt.hash(password, 10)
        const newUser = await userModel.create({
            username, email, password: hashPassword
        })
        const token = jwt.sign({ _id: newUser._id, email: newUser.email }, process.env.JWT_SECRET)

        console.log(res.cookie('token', token))

        res.redirect('/feed')
    
    } catch (error) {
        res.status(400).send(error)
    }
}


module.exports.getLogin = (req, res) => {
    res.render('login')
}

module.exports.postLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).send('Invalid email or password')
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).send('Invalid email or password')
        }
        const token = jwt.sign({ _id: user._id, email: user.email }, process.env.JWT_SECRET)
        console.log(res.cookie('token', token))
        res.redirect('/feed')
    } catch (error) {
        res.status(400
        ).send(error)
    }
}
