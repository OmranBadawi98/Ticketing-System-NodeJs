import mongoose from 'mongoose'
import { model, Model } from 'mongoose'
import { Ibranches } from '../interfaces/interfaces'

const branchesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ip: {
    type: Number,
    required: true,
  },
  count_pc: {
    type: Number,
    required: true,
  },
  notice_printer: {
    type: Number,
    required: true,
  },
  barcode: {
    type: Number,
    required: true,
  },
  print_server_sader: {
    type: Number,
    required: true,
  },
  print_server_wared: {
    type: Number,
    required: true,
  },
  detail: {
    type: String,
    required: true,
  },
  note: {
    type: String,
    required: true,
  },
})

const Branches: Model<Ibranches> = model('Branches', branchesSchema)
module.exports = Branches
