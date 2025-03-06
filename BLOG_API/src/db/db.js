const mongoose = require('mongoose');

const connectDB = ()=>{
    try {
        mongoose.connect('mongodb://localhost:27017/blogApp')
        .then(()=>{
            console.log('Connected to the database')
        })
        .catch((e)=>{
            console.error(e)
        })
    } catch (error) {
        console.error(error)
    }
}

module.exports = connectDB;