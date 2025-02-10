const userModel = require('../models/user.model');

module.exports.indexController = (req, res) => {
    res.send('Hello World!');
};

module.exports.createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await userModel.create({ username, email, password });
        console.log('User created: ', user);

    } catch (error) {
        console.error('Error creating user: ', error);
    }

    res.send('User created');
};

module.exports.updateUser = async (req, res) => {
    const { email } = req.body;
    const updateUser = await userModel.findOneAndUpdate({email}, { username: "Aniket" }).then(() => {
        return res.send("username changed successfully");
    })
    console.log(updateUser)
}


module.exports.deleteUser = async (req, res) => {
    const { email } = req.body;
    const deleteUser = await userModel.findOneAndDelete({email},).then(() => {
        return res.send("delete changed successfully");
    })
    console.log(deleteUser)
}