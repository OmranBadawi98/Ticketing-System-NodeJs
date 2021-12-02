import express from 'express'
export var router = express.Router()
import * as controller_register from '../controllers/register-controller'

// Create New User
router.post('/', controller_register.create_newUser)
