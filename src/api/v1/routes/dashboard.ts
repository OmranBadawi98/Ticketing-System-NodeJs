import express from 'express'
export var router = express.Router()
import * as controller_dashboard from '../controllers/dashboard-controller'
// Getting all
router.get('/', controller_dashboard.get_dashboard)

// // Getting One
// router.get('/:id', controller.get_one_branche)

// // Creating one
// router.post('/', controller.create_one_branche)

// // Updating One
// router.patch('/:id', controller.update_one_branche)

// // Deleting One
// router.delete('/:id', controller.delete_one_branche)
