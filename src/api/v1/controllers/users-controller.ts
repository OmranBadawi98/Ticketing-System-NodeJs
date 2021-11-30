const Users = require('../models/users-model')

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
  const users = new Users({
    name: req.body.name,
    password: req.body.password,
  })
  try {
    const newUser = await users.save()
    res.status(201).json(newUser)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

const update_one_user = async (req, res) => {
  // if (req.body.name != null) {
  //   res.branches.name = req.body.name
  // }
  // if (req.body.subscribedToChannel != null) {
  //   res.subscriber.subscribedToChannel = req.body.subscribedToChannel
  // }
  // try {
  //   const updatedSubscriber = await res.subscriber.save()
  //   res.json(updatedSubscriber)
  // } catch (err) {
  //   res.status(400).json({ message: err.message })
  // }
}

const delete_one_user = async (req, res) => {
  // try {
  //   const checkingID = await new checkId().getSubs(req.params.id)
  //   if (checkingID == null) {
  //     return res.status(404).json({ message: 'error' })
  //   }
  //   const resault = await checkingID.remove()
  //   res.json(resault)
  // } catch (err) {
  //   res.json({ message: err.message })
  // }
}

// class errorGetIdException {
//   errorCode: string
//   message: string
//   constructor() {
//     this.errorCode = 'noId001'
//     this.message = 'Cannot find subscriber'
//   }
// }

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
