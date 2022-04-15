const express = require('express')
const router = express.Router()
const sp = require('../controller/sendToPython')

router.get('/getPythonResult', function (req, res, next) {
  const param = req.query.inputText
  console.log(param)
  sp.sendToPython([param], (res) => {
    console.log('python的print传递过来的数据', res)
  })
  res.send({ name: 'aaa', pwd: '123' })
})
module.exports = router
