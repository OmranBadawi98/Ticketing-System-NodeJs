const Users = require('../models/users-model')
import bcrypt from 'bcrypt'

const get_all_users = async (req, res) => {
  try {
    const users = await Users.find()
    res.json(users)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

const get_one_user = async (req, res) => {
  try {
    const users = await Users.findById(req.params.id)
    res.json(users)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

const create_one_user = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    const users = new Users({
      name: req.body.name,
      password: hashedPassword,
    })
    const newUser = await users.save()
    res.status(201).json(newUser)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

const update_one_user = async (req, res) => {
  try {
    // const checkingID = await new checkId().getId(req.params.id)
    // if (checkingID == null) {
    //   return res.status(404).json({ message: 'error' })
    // }
    const update = await Users.updateOne(
      {
        _id: req.params.id,
      },
      {
        $set: {
          name: req.body.name,
        },
      }
    )
    res.json(update)
  } catch (err) {
    res.json({ message: err.message })
  }
}

const delete_one_user = async (req, res) => {
  try {
    // const checkingID = await new checkId().getId(req.params.id)
    // if (checkingID == null) {
    //   return res.status(404).json({ message: 'error' })
    // }
    const deleted = await Users.remove({
      _id: req.params.id,
    })
    res.json(deleted)
  } catch (err) {
    res.json({ message: err.message })
  }
}

// class checkId {
//   public async getSubs(subId: string): Promise<any> {
//     let subscriber
//     try {
//       subscriber = await Branches.findById(subId)
//       if (subscriber == null) {
//         throw new errorGetIdException()
//       }
//     } catch (err) {
//       throw err
//     }
//     return subscriber
//   }
// }

module.exports = {
  get_all_users,
  get_one_user,
  create_one_user,
  update_one_user,
  delete_one_user,
}
