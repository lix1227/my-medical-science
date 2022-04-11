var express = require('express')
var router = express.Router()

router.get('/first', function (req, res, next) {
  res.send({ name: 'aaa', pwd: '123' })
})
module.exports = router
