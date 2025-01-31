const app = require('./src/app')
const connect = require('./src/db/db')
const port = 4000;
connect();

app.listen(port,()=>{
    console.log(`server is running on Port: ${port}`);
})