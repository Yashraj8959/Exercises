const express = require('express');
const router = express.Router();
const { createPost, getPosts, deletePost, updatePost } = require('../controllers/blog.controller');
const { authUser } = require('../middlewares/user.middleware');

router.post('/create',authUser, createPost);
router.get('/',authUser, getPosts);
router.delete('/delete/:id',authUser, deletePost);
router.patch('/update/:id',authUser, updatePost);

module.exports = router;