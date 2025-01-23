const app = require('./src/app');
const connect = require('./src/db/db')
require('dotenv').config()
connect();
const port = process.env.PORT
app.listen(process.env.port, ()=>{
    console.log(`Server is running on port ${port}`);
})