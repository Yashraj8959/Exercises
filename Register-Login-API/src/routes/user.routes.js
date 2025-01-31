const router = require('express').Router()
const controller = require('../controllers/user.controller')

router.get('/',controller.UserController)

router.get('/register',controller.RegisterController)
router.post('/register',controller.RegisterPostController)

router.get('/login',controller.LoginController)
router.post('/login',controller.LoginPostController)

router.get('/profile', controller.ProfileController)

module.exports = router;