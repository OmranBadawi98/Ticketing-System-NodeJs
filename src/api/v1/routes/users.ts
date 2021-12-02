import express from 'express'
export var router = express.Router()
import * as controller_users from '../controllers/users-controller'

// Getting all
router.get('/', controller_users.get_all_users)

// Getting One
router.get('/:id', controller_users.get_one_user)

// Creating one
// router.post('/', controller_users.create_one_user)

// Updating One
router.patch('/:id', controller_users.update_one_user)

// Deleting One
router.delete('/:id', controller_users.delete_one_user)
