import { Itickets } from './../interfaces/interfaces'
import mongoose from 'mongoose'
import { model, Model } from 'mongoose'

const ticketsSchema = new mongoose.Schema({
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

// const Ticket: Model<Itickets> = model('Tickets', ticketsSchema)
// module.exports = Ticket
export var Tickets = mongoose.model<Itickets>('Tickets', ticketsSchema)
