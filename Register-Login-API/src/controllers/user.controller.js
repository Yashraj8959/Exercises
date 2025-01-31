const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports.UserController = (req,res)=>{
    res.send('users')
}

module.exports.RegisterController = (req,res)=>{
    res.send('register page')
}

module.exports.LoginController = (req,res)=>{
    res.send('login page')
}

// ---------------------------------------Register post controller

module.exports.RegisterPostController = async (req,res)=>{
    try {
        const {username,email,password} = req.body;
        console.log(req.body);
        
        if (!password) {
            return res.status(400).send('Password is required');
        }
        const hashPassword = await bcrypt.hash(password,10)
        
        const newUser = await userModel.create({
            username,email,password: hashPassword
        })

        res.send(newUser)
        
    } catch (error) {
        console.log('Error during Register',error);
        
        res.status(500).send('Internal Server Error')
    }

    // res.send('register post')
}

// --------------------------------------------------------------Login Post controller

module.exports.LoginPostController = async (req,res)=>{
    try {
        const {email, password}= req.body;
    const user = await userModel.findOne({email});

    if(!user){
        // for terminate the function 'return' the response
        return res.status(400).json({
            message: 'Invalid email or password'
        })
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch){
        return res.status(400).json({
            message: 'Invalid email or password'
        })
    }
    const token = jwt.sign({_id: user._id,email: user.email},
        process.env.JWT_SECRET
    )
    console.log('Token:', token);
        res.status(200).json({
            message: 'Logged in',
            token: token
        });
    // res.send(user)
    } catch (error) {
        console.error('Error during login', error);
        
        res.status(500).send('Internal Server Error')
    }

}


module.exports.ProfileController = async (req, res)=>{
    try {
        // console.log(req.headers.authorization.split(" ")[1])
        const token = req.headers.authorization.split(" ")[1]
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        // res.send(decoded)
        const user = await userModel.findOne({email:decoded.email})
        res.send(user)
    } catch (error) {
        res.status(400).send(error.message)
    }
}