var router = require('./index')

const controller_Tickets = require('../controllers/tickets-controller')

// Getting all
router.get('/', controller_Tickets.get_all_tickets)

// Getting One
router.get('/:id', controller_Tickets.get_one_ticket)

// Creating one
router.post('/', controller_Tickets.create_one_ticket)

// Updating One
router.patch('/:id', controller_Tickets.update_one_ticket)

// Deleting One
router.delete('/:id', controller_Tickets.delete_one_ticket)

module.exports = router
