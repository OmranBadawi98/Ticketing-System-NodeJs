// const indexRouter = require('./src/api/v1/routes/index')
import { router as usersRouter } from '../../src/api/v1/routes/users'
import { router as ticketsRouter } from '../../src/api/v1/routes/tickets'
import { router as branchesRouter } from '../../src/api/v1/routes/branches'
import { router as dashboardRouter } from '../../src/api/v1/routes/dashboard'
import { router as loginRouter } from '../../src/api/v1/routes/login'
import { router as registerRouter } from '../../src/api/v1/routes/register'

export function registerRoute(app) {
  app.use('/users', usersRouter)
  app.use('/tickets', ticketsRouter)
  app.use('/branches', branchesRouter)
  app.use('/dashboard', dashboardRouter)
  app.use('/login', loginRouter)
  app.use('/register', registerRouter)
}
