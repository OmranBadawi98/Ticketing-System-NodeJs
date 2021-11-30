const mongooseBranch = require('mongoose')
import { model, Model } from 'mongoose'
import { Ibranches } from '../interfaces/interfaces'

const branchesSchema = new mongooseBranch.Schema({
  name: {
    type: String,
    required: true,
  },
  ip: {
    type: Number,
    // required: true,
  },
  count_pc: {
    type: Number,
    // required: true,
  },
  notice_printer: {
    type: Number,
    // required: true,
  },
  barcode: {
    type: Number,
    // required: true,
  },
  print_server_sader: {
    type: Number,
    // required: true,
  },
  print_server_wared: {
    type: Number,
    // required: true,
  },
  detail: {
    type: String,
    // required: true,
  },
  note: {
    type: String,
    // required: true,
  },
})

const Branch: Model<Ibranches> = model('Branches', branchesSchema)
module.exports = Branch
// module.exports = {
//   branches,
//   tickets,
//   users,
// }

// const ticketsSchema = new mongoose.Schema({
//   issue: {
//     type: String,
//     required: true,
//   },
//   from: {
//     type: String,
//     required: true,
//   },
//   to: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   done: {
//     type: Boolean,
//     // required: true,
//   },
// })

// const usersSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
// })

// let branches = mongoose.model('Branches', branchesSchema)
// let tickets = mongoose.model('Tickets', ticketsSchema)
// let users = mongoose.model('Users', usersSchema)
// module.exports = mongooseBranch.model('Branches', branchesSchema)
