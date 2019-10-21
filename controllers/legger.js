const express = require('express')

const leggerApi = require('../models/legger.js')

const leggerRouter = express.Router()

leggerRouter.get('/legger/new', (req, res) => {
  res.render('legger/createLegger')
})
leggerRouter.get('/legger/edit/:leggerId', (req, res) => {
  leggerApi.getSingleLegger(req.params.leggerId)
    .then((singleLegger) => {
      res.render('legger/editFormLegger', singleLegger)
    })
})

//getAll
leggerRouter.get('/legger', (req, res) => {
  leggerApi.getAllLegger()
    .then((allLegger) => {
      res.render('legger/allLegger', {allLegger})
 //     res.json(allLegger)
    })
})
//getOne 
leggerRouter.get('/legger/:leggerId', (req, res) => {
  leggerApi.getSingleLegger(req.params.leggerId)
    .then((singleLegger) => {
      res.render('legger/singleLegger', singleLegger)
 //     res.json(singleLegger)
    })
})
//update
leggerRouter.put('/legger/:leggerId', (req, res) => {
  leggerApi.editLegger(req.params.leggerId, req.body)
    .then((editLegger) => {
      res.redirect(`/legger/${req.params.leggerId}`)
 //     res.json(editLegger)
    })
})
//create ****************for some reason it is not changing the inner workings just making an id and ish. idk.
leggerRouter.post('/legger', (req, res) => {
  leggerApi.addNewLegger(req.body)
    .then((createLegger) => {
      res.redirect('/legger')
 //     res.json(createLegger)
    })
})
//delete
leggerRouter.delete('/legger/:leggerId', (req, res) => {
  leggerApi.deleteLegger(req.params.leggerId)
    .then((deleteLegger) => {
      res.redirect('/legger')
//      res.json(deleteLegger)
    })
})

module.exports = {
  leggerRouter
}
