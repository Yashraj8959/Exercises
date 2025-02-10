const express = require('express');
const controller = require('../controllers/user.controller');
const router = express.Router()

router.get('/register',controller.getRegister)

router.post('/register',controller.postRegister)

router.get('/login',controller.getLogin)

router.post('/login',controller.postLogin)

module.exports = router;