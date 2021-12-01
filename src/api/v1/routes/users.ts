var express = require('express')
var router = express.Router()
const controller_Users = require('../controllers/users-controller')

// Getting all
router.get('/', controller_Users.get_all_users)

// Getting One
router.get('/:id', controller_Users.get_one_user)

// Creating one
router.post('/', controller_Users.create_one_user)

// Updating One
router.patch('/:id', controller_Users.update_one_user)

// Deleting One
router.delete('/:id', controller_Users.delete_one_user)

module.exports = router
