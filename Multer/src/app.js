const express = require('express');
const upload = require('./utils/multer')
const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));  // Serving static files from public folder

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to my API!' });
});

app.post('/upload', upload.any("myfile"), (req, res) => {
    res.send({ message: 'File uploaded successfully!', files: req.files });
})

module.exports = app;