const {Router} = require('express');
const jwt = require('jsonwebtoken')
const userModel = require('../models/user.model')
const { indexController, createUserController, homeController, createPostController, createPController, likeController, loginController, loginUserController,profileController, logoutController } = require('../contollers/controller');
const router = Router();

router.get('/', indexController)
router.post('/create-user',createUserController)
router.get('/login',loginController)
router.post('/login',loginUserController)
router.get('/profile',profileController)
router.get('/logout',logoutController)

router.get('/home',async (req,res,next)=>{
    console.log('Middleware is working 1')
    try{
                const token = req.cookies['token']
                if(!token){
                    return res.redirect('/login')
                }
                const decoded = jwt.verify(token,process.env.JWT_SECRET)
                const user =await userModel.findOne({email:decoded.email})
                req.user = user
                console.log('user verified')
                next()
            }
            catch(err){
                console.log(err)
                res.redirect('/login')
            }
}, homeController)
router.get('/create-post',createPostController)
router.post('/create-p',createPController)
router.post('/like-post/:id',likeController);
module.exports = router;