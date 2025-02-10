const express = require('express');
const {indexController,createUser,updateUser, deleteUser} = require('../controller/index.controller');
const router = express.Router();

router.get('/', indexController);
router.post('/create-user', createUser);
router.post('/update', updateUser);
router.post('/delete', deleteUser);
module.exports = router;