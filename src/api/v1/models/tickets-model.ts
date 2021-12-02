import { Itickets } from './../interfaces/interfaces'
import mongooseTicket from 'mongoose'
import { model, Model } from 'mongoose'

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
