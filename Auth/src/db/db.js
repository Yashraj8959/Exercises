const mongoose = require('mongoose');

const connect = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log('Connected to MongoDB'))
        .catch((error) => console.log(error))
    } catch (error) {
        console.log(error)
    };
}

module.exports = connect;