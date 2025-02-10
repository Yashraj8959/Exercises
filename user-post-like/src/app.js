const express = require('express');
const router = require('./routes/index.routes');
const cookieParser = require('cookie-parser')

const app = express()

app.set("view engine", "ejs")
app.set("views", "./src/views")
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


app.use('/', router)

module.exports = app;