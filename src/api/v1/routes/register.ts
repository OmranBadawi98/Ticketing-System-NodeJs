var express = require('express')
var router = express.Router()

/* GET register page. */
router.get('/', (req, res, next) => {
  res.send('Welcome To Register')
})

module.exports = router
