const express = require('express');
const router = express.Router();
const {indexController, createUserController, showUserController} = require('../controllers/index.controller')

router.get('/', indexController);
router.get('/users', showUserController)
router.get('/createUser',createUserController)
module.exports = router