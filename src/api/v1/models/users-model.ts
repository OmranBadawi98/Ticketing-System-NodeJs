import mongoose from 'mongoose'
import { model, Model } from 'mongoose'
import { Iusers } from '../interfaces/interfaces'

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})
// const User: Model<Iusers> = model('Users', usersSchema)
// module.exports = User
export var Users = mongoose.model<Iusers>('Users', usersSchema)
