const mongoose = require('mongoose')


const connect = ()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log('Connected to MongoDB')
    })
    .catch((err)=>{
        console.log('Error connecting to MongoDB')
    })

}

module.exports = connect