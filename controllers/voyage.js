const express = require('express')

const voyageApi = require('../models/voyage.js')

const voyageRouter = express.Router()













//getAll
voyageRouter.get('/voyage', (req, res) => {
  voyageApi.getAllVoyage()
    .then((allVoyage) => {
      res.json(allVoyage)
    })
})
//getOne 
voyageRouter.get('/voyage/:voyageId', (req, res) => {
  voyageApi.getSingleVoyage(req.params.voyageId)
    .then((singleVoyage) => {
      res.json(singleVoyage)
    })
})
//update
voyageRouter.put('/voyage/:voyageId', (req, res) => {
  voyageApi.editVoyage(req.params.voyageId, req.body)
    .then((editVoyage) => {
      res.json(editVoyage)
    })
})
//create ****************for some reason it is not changing the inner workings just making an id and ish. idk.
voyageRouter.post('/voyage', (req, res) => {
  voyageApi.addNewVoyage(req.body)
    .then((createVoyage) => {
      res.json(createVoyage)
    })
})
//delete
voyageRouter.delete('/voyage/:voyageId', (req, res) => {
  voyageApi.deleteVoyage(req.params.voyageId)
    .then((deleteVoyage) => {
      res.json(deleteVoyage)
    })
})

module.exports = {
  voyageRouter
}
