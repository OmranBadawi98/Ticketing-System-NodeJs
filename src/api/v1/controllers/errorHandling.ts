class errorGetIdException {
  errorCode: string
  message: string
  constructor() {
    this.errorCode = 'NuId001'
    this.message = 'Cannot find ID'
  }
}
module.exports = errorGetIdException
