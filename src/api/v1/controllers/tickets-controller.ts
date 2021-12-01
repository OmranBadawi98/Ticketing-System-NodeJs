const Tickets = require('../models/tickets-model')

const get_all_tickets = async (req, res) => {
  try {
    const tickets = await Tickets.find()
    res.json(tickets)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

const get_one_ticket = async (req, res) => {
  try {
    const tickets = await Tickets.findById(req.params.id)
    res.json(tickets)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

const create_one_ticket = async (req, res) => {
  const tickets = new Tickets({
    issue: req.body.issue,
    from: req.body.from,
    to: req.body.to,
    description: req.body.description,
    done: req.body.done,
  })
  try {
    const newTicket = await tickets.save()
    res.status(201).json(newTicket)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

const update_one_ticket = async (req, res) => {
  try {
    // const checkingID = await new checkId().getId(req.params.id)
    // if (checkingID == null) {
    //   return res.status(404).json({ message: 'error' })
    // }
    const update = await Tickets.updateOne(
      {
        _id: req.params.id,
      },
      {
        $set: {
          description: req.body.description,
          done: req.body.done,
        },
      }
    )
    res.json(update)
  } catch (err) {
    res.json({ message: err.message })
  }
}

const delete_one_ticket = async (req, res) => {
  try {
    // const checkingID = await new checkId().getId(req.params.id)
    // if (checkingID == null) {
    //   return res.status(404).json({ message: 'error' })
    // }
    const deleted = await Tickets.remove({
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
  get_all_tickets,
  get_one_ticket,
  create_one_ticket,
  update_one_ticket,
  delete_one_ticket,
}
