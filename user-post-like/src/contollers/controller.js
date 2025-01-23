const userModel = require("../models/user.model");
const postModel = require("../models/post.model")
// --------------------------> index controller
module.exports.indexController = (req,res)=>{
    res.render('index');
    // res.send('index page')

}

// --------------------------> create user controller
module.exports.createUserController =async (req,res)=>{
    console.log(req.body);
    // res.send('kii')
    const {username,email,bio,imageUrl} = req.body;
    const newUser = await userModel.create({
        username,email,bio,imageUrl
    })
    // res.send(newUser)
    res.redirect('/home')
}

 // --------------------------> home controller
module.exports.homeController =async (req,res)=>{
    const posts = await postModel.find().sort({createdAt:-1})
    const users = await userModel.find().sort({createdAt:-1});
    res.render('home',{posts,users} )
}

// --------------------------> create post controller
module.exports.createPostController = (req,res)=>{
    res.render('createPost')
}

// --------------------------> create post controller
module.exports.createPController =async (req,res)=>{
    const {title,imageUrl,caption} = req.body;
    console.log(req.body);
    
    const newPost = await postModel.create({
        title,imageUrl,caption
        })
        res.redirect('/home')
        }
