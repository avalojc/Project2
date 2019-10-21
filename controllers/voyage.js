const express = require('express')

const templateApi = require('../models/voyage.js')

const voyageRouter = express.Router()

// templateRouter.get('/', (req, res) => {
//   res.send(templateApi.getHelloWorldString())
// })

module.exports = {
  voyageRouter
}
