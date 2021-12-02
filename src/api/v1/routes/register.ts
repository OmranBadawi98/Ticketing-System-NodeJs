var express = require('express')
var router = express.Router()
const controller_Register = require('../controllers/register-controller')

// Create New User
router.post('/', controller_Register.create_newUser)

module.exports = router
