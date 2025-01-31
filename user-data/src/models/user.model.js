const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        // unique: true
    },
    email:{
        type: String,
        // unique: true
    },
    bio:{
        type: String,
    },
    Image:{
        type: String,
    }
})

module.exports = mongoose.model("user",UserSchema)