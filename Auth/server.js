require("dotenv").config();
const app = require("./src/app");
const PORT = 3000;
const connect = require("./src/db/db");
connect();





app.listen(PORT,()=>{
    console.log(`Server running on port${PORT}`);
})

