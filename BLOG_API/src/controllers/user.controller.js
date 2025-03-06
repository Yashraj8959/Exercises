const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports.register = async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Please enter all fields' });
    }
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10)

    try {
        const user = await userModel.create({ username, email, password: hashedPassword });
        const token = jwt.sign({id:user._id, email  }, "yashrajSecretKey")
        res.status(201).json({user, token});
        res.cookie('token',)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
module.exports.login = async (req, res) => {
    try {const { email, password } = req.body;
    if ( !email || !password) {
        return res.status(400).json({ message: 'Please enter all fields' });
    }
    const User = await userModel.findOne({ email });
    if (!User) {
        return res.status(400).json({ message: 'User did not exists' });
    }
    const isMatch = await bcrypt.compare(password, User.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({id:User._id, email  }, "yashrajSecretKey")
    res.cookie('token',token)
    res.status(201).json({ User, token });}
    catch (error) {
        res.status(400).json({ message: error.message });
    }
    
}