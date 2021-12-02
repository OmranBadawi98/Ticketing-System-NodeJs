require('dotenv').config()
import createError from 'http-errors'
import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import bcrypt from 'bcrypt'
import bodyParser from 'body-parser'
// import mongoose from 'mongoose'
// require('./src/api/v1/routes/index')(express)
const indexRouter = require('./src/api/v1/routes/index')
const usersRouter = require('./src/api/v1/routes/users')
const ticketsRouter = require('./src/api/v1/routes/tickets')
const branchesRouter = require('./src/api/v1/routes/branches')
// const dashboardRouter = require('./src/api/v1/routes/dashboard')
const loginRouter = require('./src/api/v1/routes/login')
const registerRouter = require('./src/api/v1/routes/register')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/tickets', ticketsRouter)
app.use('/branches', branchesRouter)
// app.use('/dashboard', dashboardRouter)
app.use('/login', loginRouter)
app.use('/register', registerRouter)

// Connect To DB
const connectDB = require('./config/mongodb/connectdb')

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.send('error page ')
})
// app.listen(4000, () => console.log('Server Started in http://localhost:4000'))
const start = async () => {
  try {
    await connectDB(process.env.DATABASE_URL)
    app.listen(4000, () =>
      console.log('Server Started in http://localhost:4000')
    )
  } catch (err) {
    console.log(err)
  }
}
start()
