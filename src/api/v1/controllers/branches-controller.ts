import { Ibranches } from './../interfaces/interfaces'
const Branches = require('../models/branches-model')
const errorGetIdException = require('./errorHandling')

// GET All Branches
const get_all_branches = async (req, res) => {
  try {
    const branches = await Branches.find()
    res.json(branches)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// GET One Branche
const get_one_branche = async (req, res) => {
  try {
    const checkingID = await new checkId().getSubs(req.params.id)
    if (checkingID == null) {
      return res.status(404).json({ message: 'error' })
    }
    const branches = await Branches.findById(req.params.id)
    res.json(branches)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// CREATE One Branche
const create_one_branche = async (req, res) => {
  const branches = new Branches({
    name: req.body.name,
    ip: req.body.ip,
    count_pc: req.body.count_pc,
    notice_printer: req.body.notice_printer,
    barcode: req.body.barcode,
    print_server_sader: req.body.print_server_sader,
    print_server_wared: req.body.print_server_wared,
    detail: req.body.detail,
    note: req.body.note,
  })
  try {
    const newBranch = await branches.save()
    res.status(201).json(newBranch)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

// UPDATE One Branche
const update_one_branche = async (req, res) => {
  if (req.body.name != null) {
    res.branches.name = req.body.name
  }
  // if (req.body.ip != null) {
  //   res.branches.ip = req.body.ip
  // }
  // if (req.body.count_pc != null) {
  //   res.branches.count_pc = req.body.count_pc
  // }
  // if (req.body.notice_printer != null) {
  //   res.branches.notice_printer = req.body.notice_printer
  // }
  // if (req.body.barcode != null) {
  //   res.branches.barcode = req.body.barcode
  // }
  // if (req.body.print_server_sader != null) {
  //   res.branches.print_server_sader = req.body.print_server_sader
  // }
  // if (req.body.print_server_wared != null) {
  //   res.branches.print_server_wared = req.body.print_server_wared
  // }
  // if (req.body.detail != null) {
  //   res.branches.detail = req.body.detail
  // }
  // if (req.body.note != null) {
  //   res.branches.note = req.body.note
  // }
  try {
    const updatedBranche = await res.branches.save()
    res.json(updatedBranche)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

// DELETE One Branche
const delete_one_branche = async (req, res) => {
  try {
    const checkingID = await new checkId().getSubs(req.params.id)
    if (checkingID == null) {
      return res.status(404).json({ message: 'error' })
    }
    const results = await checkingID.remove()
    res.json(results)
  } catch (err) {
    res.json({ message: err.message })
  }
}

// class errorGetIdException {
//   errorCode: string
//   message: string
//   constructor() {
//     this.errorCode = 'NuId001'
//     this.message = 'Cannot find subscriber'
//   }
// }

class checkId {
  public async getSubs(subId: string): Promise<Ibranches> {
    let subscriber
    try {
      subscriber = await Branches.findById(subId)
      if (subscriber == null) {
        throw new errorGetIdException()
      }
    } catch (err) {
      throw err
    }
    return subscriber
  }
}

module.exports = {
  get_all_branches,
  get_one_branche,
  create_one_branche,
  update_one_branche,
  delete_one_branche,
}
