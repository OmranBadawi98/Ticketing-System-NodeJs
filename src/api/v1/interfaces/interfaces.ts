import { Document } from 'mongoose'

export interface Ibranches extends Document {
  name: string
  ip: string
  count_pc: number
  notice_printer: number
  barcode: number
  print_server_sader: number
  print_server_wared: number
  detail: string
  note: string
}
export interface Itickets extends Document {
  issue: string
  from: string
  to: string
  description: string
  done: boolean
}
export interface Iusers extends Document {
  name: string
  password: string
}
