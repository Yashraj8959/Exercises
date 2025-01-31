const userModel = require('../models/user.model')

module.exports.indexController = (req,res)=>{
    // res.send('hey paaji')
    res.render('index')
}

module.exports.createUserController = async(req,res)=>{
    console.log(req.query)
    const { username, email,bio,imageUrl} = req.query;
    const newUser = await userModel.create({
        username, email,bio,imageUrl
    })
    res.redirect('/users')
    // res.send('user created')
}

module.exports.showUserController = async(req,res)=>{
    const users = await userModel.find()
    res.render('users' ,{users})
}