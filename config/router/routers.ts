import express from 'express'

const indexRouter = require('./src/api/v1/routes/index')
const usersRouter = require('./src/api/v1/routes/users')
const ticketsRouter = require('./src/api/v1/routes/tickets')
const branchesRouter = require('./src/api/v1/routes/branches')
const dashboardRouter = require('./src/api/v1/routes/dashboard')
const loginRouter = require('./src/api/v1/routes/login')
const registerRouter = require('./src/api/v1/routes/register')

var app = express()

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/tickets', ticketsRouter)
app.use('/branches', branchesRouter)
app.use('/dashboard', dashboardRouter)
app.use('/login', loginRouter)
app.use('/register', registerRouter)

// module.exports = app
