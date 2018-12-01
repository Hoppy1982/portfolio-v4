const path = require('path')
const express = require('express')
const router = express.Router()

//middleware
router.use('/', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
  next()
})


router.get('*', (req, res, next) => {
  console.log(`GET request rx'd..`)
  let indexPagePath = path.join(__dirname, './../../client/dist/index.html')
  console.log(indexPagePath)
  res.sendFile(indexPagePath)
})


module.exports = router
