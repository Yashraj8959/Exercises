const app = require('./src/app');
const connectDB = require('./src/db/db');
const port = 4000;

connectDB();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});