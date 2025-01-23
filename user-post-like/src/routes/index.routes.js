const {Router} = require('express');
const { indexController, createUserController, homeController, createPostController, createPController } = require('../contollers/controller');
const Post = require('../models/post.model')
const router = Router();

router.get('/', indexController)
router.post('/create-user',createUserController)
router.get('/home',homeController)
router.get('/create-post',createPostController)
router.post('/create-p',createPController)
router.post('/like-post/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        post.like += 1;
        await post.save();
        res.status(200).send('Like updated');
    } catch (error) {
        res.status(500).send('Error updating like');
    }
});
module.exports = router;