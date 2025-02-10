const jwt = require('jsonwebtoken')

module.exports.indexController = (req,res)=>{
    // res.send('Hello World')
    console.log(req.cookies)
    res.render('index')
}

module.exports.feedController = (req,res)=>{
    try{
        const token = req.cookies['token']
        if(!token){
            return res.redirect('/users/register')
        }
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        res.render('feed')
    }
    catch(err){
        console.log(err)
        res.redirect('/users/register')
    }
}