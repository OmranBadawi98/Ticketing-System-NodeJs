import { Ibranches } from './../interfaces/interfaces'
import { Branches } from '../models/branches-model'
import { errorGetIdException } from './errorHandling'

// GET All Branches
export const get_all_branches = async (req, res) => {
  try {
    const branches = await Branches.find()
    res.json(branches)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// GET One Branche
export const get_one_branche = async (req, res) => {
  try {
    const checkingID = await new checkId().getId(req.params.id)
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
export const create_one_branche = async (req, res) => {
  const branche = req.body as Ibranches
  const branches = new Branches({
    name: branche.name,
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
export const update_one_branche = async (req, res) => {
  try {
    const checkingID = await new checkId().getId(req.params.id)
    if (checkingID == null) {
      return res.status(404).json({ message: 'error' })
    }
    const update = await Branches.updateOne(
      {
        _id: req.params.id,
      },
      {
        $set: { name: req.body.name },
      }
    )
    res.json(update)
  } catch (err) {
    res.json({ message: err.message })
  }
  // try {
  //   const checkingID = await new checkId().getId(req.params.id)
  //   if (checkingID == null) {
  //     return res.status(404).json({ message: 'error' })
  //   }
  //   console.log(checkingID)
  //   if (req.body.name != null) {
  //     res. = req.body.name
  //   }
  //   console.log(res.checkingID.name)
  //   console.log(res.Branches.name)
  //   console.log(res.branche.name)

  //   const updatedBranche = await res.checkingID.save()
  //   res.json(updatedBranche)
  // } catch (err) {
  //   res.status(400).json({ message: "can't update" })
  // }
}

// DELETE One Branche
export const delete_one_branche = async (req, res) => {
  try {
    const checkingID = await new checkId().getId(req.params.id)
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
  public async getId(getId: string): Promise<Ibranches> {
    let branche
    try {
      branche = await Branches.findById(getId)
      if (branche == null) {
        throw new errorGetIdException()
      }
    } catch (err) {
      throw err
    }
    return branche
  }
}
