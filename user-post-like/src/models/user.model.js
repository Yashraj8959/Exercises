const mongoose = require('mongoose')

const { Schema } = mongoose
const userSchema = new Schema({
    username: {
        type: String,

    },
    email:{
        type:String
    },
    profileImage:{
        type:String
    },
    bio:{
        type:String
    }
})

module.exports = mongoose.model('user', userSchema)