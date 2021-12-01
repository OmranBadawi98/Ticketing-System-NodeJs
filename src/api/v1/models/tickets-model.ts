const mongooseTicket = require('mongoose')
import { model, Model } from 'mongoose'
import { Itickets } from '../interfaces/interfaces'

const ticketsSchema = new mongooseTicket.Schema({
  issue: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    default: false,
    // required: true,
  },
})

const Ticket: Model<Itickets> = model('Tickets', ticketsSchema)
module.exports = Ticket
