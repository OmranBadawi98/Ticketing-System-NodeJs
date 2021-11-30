var express = require('express')
var router = express.Router()

/* GET branches page. */
// router.get('/', (req, res, next) => {
//   res.send('Welcome to branches')
// })
const controller_Branches = require('../controllers/branches-controller')
// Getting all
router.get('/', controller_Branches.get_all_branches)

// Getting One
router.get('/:id', controller_Branches.get_one_branche)

// Creating one
router.post('/', controller_Branches.create_one_branche)

// Updating One
router.patch('/:id', controller_Branches.update_one_branche)

// Deleting One
router.delete('/:id', controller_Branches.delete_one_branche)

module.exports = router
