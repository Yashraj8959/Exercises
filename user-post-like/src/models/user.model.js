const mongoose = require('mongoose')

const { Schema } = mongoose
const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true
    },
    email:{
        type:String,
        required:[true, 'Email is required'],
        unique:true
    },
    password:{
        type:String,
        required:[true, 'Password is required'],
        minlength:[6, 'Password must be at least 6 characters long']
    },
    profileImage:{
        type:String
    },
    bio:{
        type:String
    }
})

module.exports = mongoose.model('user', userSchema)