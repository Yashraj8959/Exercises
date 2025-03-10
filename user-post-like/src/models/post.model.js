const mongoose = require('mongoose')


const postSchema = new mongoose.Schema({
    title: String,
    like:{
        type:Number,
        default:0
    },
    imageUrl:{
        type:String,
    },
    caption:{
        type:String,
    }
})

module.exports = mongoose.model('post',postSchema)
