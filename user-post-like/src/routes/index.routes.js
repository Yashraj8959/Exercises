const {Router} = require('express');
const { indexController, createUserController, homeController, createPostController, createPController, likeController, loginController, loginUserController,profileController } = require('../contollers/controller');
const router = Router();

router.get('/', indexController)
router.post('/create-user',createUserController)
router.get('/login',loginController)
router.post('/login',loginUserController)
router.get('/profile',profileController)


router.get('/home',homeController)
router.get('/create-post',createPostController)
router.post('/create-p',createPController)
router.post('/like-post/:id',likeController);
module.exports = router;