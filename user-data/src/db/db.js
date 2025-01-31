const mongoose = require('mongoose');

const connect = ()=>{
    mongoose.connect('mongodb://0.0.0.0:27017/kodr')
    .then(()=>{
        console.log('Database connected')
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports = connect;