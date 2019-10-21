const express = require('express')

const voyageApi = require('../models/voyage.js')

const voyageRouter = express.Router()

// templateRouter.get('/', (req, res) => {
//   res.send(templateApi.getHelloWorldString())
// })

//getAll
voyageRouter.get('/voyage', (req, res) => {
  voyageApi.getAllVoyage()
    .then((allVoyage) => {
      res.json(allVoyage)
    })
})

//create
voyageRouter.post('/voyage', (req, res) => {
  voyageApi.addNewVoyage(req.body)
    .then((createVoyage) => {
      res.json(createVoyage)
    })
})



module.exports = {
  voyageRouter
}
