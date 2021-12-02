import express from 'express'
export var router = express.Router()
import controller_register from '../controllers/register-controller'

// Create New User
router.post('/', controller_register.create_newUser)
