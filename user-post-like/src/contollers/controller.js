const userModel = require("../models/user.model");
const postModel = require("../models/post.model")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


// --------------------------> index controller
module.exports.indexController = (req,res)=>{
    res.render('index');
    // res.send('index page')

}

// --------------------------> create user controller
module.exports.createUserController =async (req,res)=>{
    // console.log(req.body);
    // res.send('kii')
    const {username,email,bio,imageUrl,password} = req.body;
    const hash = await bcrypt.hash(password,10)
    const newUser = await userModel.create({
        username,email,bio,imageUrl,password : hash
    })
    // res.send(newUser)
    res.redirect('/home')
}

// --------------------------> login controller
module.exports.loginController = (req,res)=>{
    res.render('login')
}

// --------------------------> login user controller
module.exports.loginUserController = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email)
        const user = await userModel.findOne({ email });
        console.log(user);

        if (!user) {
            return res.status(400).json({
                message:'Invalid email or password'
            })
        }


        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log('Password does not match');
            return res.redirect('/login');
        }
        const token = jwt.sign({ _id: user._id,
            email: user.email
        },
            process.env.JWT_SECRET,
            // { expiresIn: '1h' },
            // (err, token) => {
            //     if (err) {
            //         console.error('Error signing token:', err);
            //         return res.status(500).send('Internal Server Error');
            //     }
            //     res.cookie('token', token, { httpOnly: true });
            //     console.log('Token:', token);
            //     // res.redirect('/home');
            // }
        );
        console.log('Token:', token);
        res.status(200).json({
            message: 'Logged in',
            token: token
        });
        // res.redirect('/home');
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).send('Internal Server Error');
    }
};

// --------------------------> profile controller
module.exports.profileController = (req,res)=>{
    res.render('profile')   
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
    // console.log(req.body);
    
    const newPost = await postModel.create({
        title,imageUrl,caption
        })
        res.redirect('/home')
        }
module.exports.likeController =  async (req, res) => {
    try {
        const post = await postModel.findById(req.params.id);
        post.like += 1;
        await post.save();
        res.status(200).send('Like updated');
    } catch (error) {
        res.status(500).send('Error updating like');
    }

    // const postId = req.params.id;
    // await postModel.findByIdAndUpdate(postId,{
    //     $inc:{
    //         like: 1
    //     }
    // })
}