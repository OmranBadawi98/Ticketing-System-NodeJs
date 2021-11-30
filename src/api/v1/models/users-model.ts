const mongooseUser = require('mongoose')
import { model, Model } from 'mongoose'
import { Iusers } from '../interfaces/interfaces'

const usersSchema = new mongooseUser.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})
const User: Model<Iusers> = model('Users', usersSchema)
module.exports = User
