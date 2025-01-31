const express = require('express')
const indexRouter = require('./routes/index.routes')
const userRouter = require('./routes/user.routes')
const app = express()


// -----------------------middlerware-----------------------
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// -----------------------routes----------------------------
app.use('/',indexRouter)
app.use('/users',userRouter)

module.exports = app;
