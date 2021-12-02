import express from 'express'
export var router = express.Router()
import { controller_branches } from '../controllers/branches-controller'
// const controller_branches = require('../controllers/branches-controller')
// Getting all
router.get('/', controller_branches.get_all_branches)

// Getting One
router.get('/:id', controller_branches.get_one_branche)

// Creating one
router.post('/', controller_branches.create_one_branche)

// Updating One
router.patch('/:id', controller_branches.update_one_branche)

// Deleting One
router.delete('/:id', controller_branches.delete_one_branche)
