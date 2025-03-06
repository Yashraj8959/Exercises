const express = require('express');
const app = express();
const indexRoutes = require('./routes/index.routes');
const userRoutes = require('./routes/user.routes');
const blogRoutes = require('./routes/blog.routes');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRoutes);
app.use('/users',userRoutes);
app.use('/blogs', blogRoutes);

module.exports = app;