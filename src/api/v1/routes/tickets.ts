import express from 'express'
export var router = express.Router()
import controller_tickets from '../controllers/tickets-controller'

// Getting all
router.get('/', controller_tickets.get_all_tickets)

// Getting One
router.get('/:id', controller_tickets.get_one_ticket)

// Creating one
router.post('/', controller_tickets.create_one_ticket)

// Updating One
router.patch('/:id', controller_tickets.update_one_ticket)

// Deleting One
router.delete('/:id', controller_tickets.delete_one_ticket)
