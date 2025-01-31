require('dotenv').config()
const app = require("./src/app");
const connect = require("./src/db/db");
const PORT =  process.env.PORT || 3000;


connect();

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})
