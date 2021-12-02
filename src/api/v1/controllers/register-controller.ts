const Users = require('../models/users-model')
import bcrypt from 'bcrypt'

// Create New User in DB
const create_newUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    Users.find({ name: req.body.name })
      .exec()
      .then(async (user) => {
        if (user.length >= 1) {
          return res.status(409).json({
            message: 'Name is Taken',
          })
        } else {
          const users = new Users({
            name: req.body.name,
            password: hashedPassword,
          })
          const newUser = await users.save()
          res.status(201).json(newUser)
        }
      })
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}
module.exports = {
  create_newUser,
}
