var express = require('express')
var router = express.Router()

// var branchesRouter = require('./branches')
// var ticketsRouter = require('./tickets')
// var usersRouter = require('./users')
// var dashboardRouter = require('./dashboard')
// var loginRouter = require('./login')
// var registerRouter = require('./register')

router.get('/', (req, res) => {
  res.send('Welcome To Tecketing System')
})

module.exports = router
// module.exports = (app) => {
//   router
//   app.use(express.json())
//   app.use('/branches', branchesRouter)
//   app.use('/tickets', ticketsRouter)
//   app.use('/users', usersRouter)
//   app.use('/dashboard', dashboardRouter)
//   app.use('/login', loginRouter)
//   app.use('/register', registerRouter)
// }
