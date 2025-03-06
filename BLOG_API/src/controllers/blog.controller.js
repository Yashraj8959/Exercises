
const blogModel = require('../models/blogModel');
// const userModel = require('../models/userModel');

module.exports.createPost = async (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ message: 'Please enter all fields' });
    }
    try {
        const post = await blogModel.create({ title, content });
        res.status(201).json({ post });
    } catch (error) {
        res.status(400).json({ message: error.message });
        console.error(error);
    }
}

module.exports.getPosts = async (req, res) => {
    try {
        const posts = await blogModel.find();
        res.status(200).json({ posts });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports.deletePost = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await blogModel.findByIdAndDelete(id);
        res.status(200).json({ post });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports.updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ message: 'Please enter all fields' });
    }
    try {
        const post = await blogModel.findByIdAndUpdate(id, { title, content }, { new: true });
        res.status(200).json({ post });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}