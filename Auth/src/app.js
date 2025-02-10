const express = require('express')
const app = express()
const indexRouter = require('./routes/index.routes')
const userRouter = require('./routes/user.routes')
const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.set('view engine','ejs')
app.set('views','./src/views')


app.use('/',indexRouter)
app.use('/users', userRouter)

app.use((req,res,next)=>{
    console.log('Middleware is working 2')
    next()
})
module.exports = app;

