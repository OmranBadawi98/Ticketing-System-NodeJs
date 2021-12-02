const Users = require('../models/users-model')
import bcrypt from 'bcrypt'

// GET Login Page
// const get_login_page = async (req, res) => {
//   try {
//     const users = await Users.find()
//     res.json(users)
//   } catch (err) {
//     res.status(500).json({ message: err.message })
//   }
// }

// Check Credential User in DB
const check_credential_user = async (req, res) => {
  try {
    Users.find({ name: req.body.name })
      .exec()
      .then(async (users) => {
        if (users.length < 1) {
          return res.status(404)
        }
        bcrypt.compare(req.body.password, users[0].password, (err, isEqual) => {
          if (err) return res.sendStatus(401)
          if (isEqual) {
            return res.status(200).json({
              message: 'Success',
            })
          }
          res.sendStatus(401)
        })
      })
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err })
  }

  //--------------------------
  // const credential = Users.find({
  //   name: req.body.name,
  // })
  // if (credential == null) {
  //   return res.status(400).send('Cannot Find User')
  // }
  // try {
  //   const passwordMatch = await bcrypt.compare(
  //     req.body.password,
  //     credential.password,
  //     (err) => {
  //       console.log('whats up')
  //       console.log(req.body.password)
  //       console.log(credential.password)
  //     }
  //   )
  //   if (passwordMatch) {
  //     res.send('success')
  //   } else {
  //     res.send('Faild')
  //   }
  //   if (
  //     await bcrypt.compare(
  //       req.body.password,
  //       credential.password,
  //       (err, result) => {
  //         result == true
  //       }
  //     )
  //   ) {
  //     res.send('success')
  //   } else {
  //     res.send('Faild')
  //   }
  // } catch (err) {
  //   res.status(500).json({ message: err.message })
  // }
}

module.exports = {
  check_credential_user,
}
