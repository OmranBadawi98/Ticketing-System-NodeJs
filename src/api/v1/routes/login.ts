import express from 'express'
export var router = express.Router()
import controller_login from '../controllers/login-controller'

// Check One User
router.post('/', controller_login.check_credential_user)
