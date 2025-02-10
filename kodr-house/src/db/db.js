const mongoose = require('mongoose');


// Connect to the database
const connect = () => {
    mongoose.connect('mongodb://localhost:27017/kodr-house').then(() => {
        console.log('Connected to database');
    }).catch((error) => {
        console.error('Error connecting to database: ', error);
    });
};

module.exports = connect;