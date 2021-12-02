/* GET login page. */
// router.get('/', (req, res, next) => {
//   res.send('Welcome To Login')
// })

// module.exports = router
var express = require('express')
var router = express.Router()
const controller_Login = require('../controllers/login-controller')

// Getting all
// router.get('/', controller_Login.get_all_user)

// Getting One
router.post('/', controller_Login.check_credential_user)

// Creating one
// router.post('/', controller_Login.create_one_ticket)

// Updating One
// router.patch('/:id', controller_Login.update_one_ticket)

// Deleting One
// router.delete('/:id', controller_Login.delete_one_ticket)

module.exports = router
