var express = require('express')
var router = express.Router()
const controller_Login = require('../controllers/login-controller')

// Check One User
router.post('/', controller_Login.check_credential_user)

module.exports = router
