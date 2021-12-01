const express = require('express')
const router = express.Router()

var branchesRouter = require('../routes/index')
var ticketsRouter = require('../routes/router1')
var usersRouter = require('../routes/router2')
var dashboardRouter = require('../routes/router2')
var loginRouter = require('../routes/router2')
var registerRouter = require('../routes/router2')

module.exports = function (app) {
  app.use(express.json())

  app.use('/branches', branchesRouter)
  app.use('/tickets', ticketsRouter)
  app.use('/users', usersRouter)
  app.use('/dashboard', dashboardRouter)
  app.use('/login', loginRouter)
  app.use('/register', registerRouter)
}
