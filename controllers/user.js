const express = require('express')

const userApi = require('../models/user.js')


const userRouter = express.Router()

userRouter.get('/user/new', (req, res) => {
  res.render('user/createUser')
})
//test
userRouter.get('user/new/:voyageId', (req, res) => {
  res.render('user/createUser', {voyageId: req.params.voyageId} )
})

userRouter.get('/user/edit/:userId', (req, res) => {
  userApi.getSingleUser(req.params.userId)
    .then((singleUser) => {
      res.render('user/editFormUser', singleUser)
    })
})

//getAll
userRouter.get('/user', (req, res) => {
  userApi.getAllUser()
    .then((allUser) => {
      res.render('user/allUser', {allUser})
 //     res.json(allUser)
    })
})
//getOne 
userRouter.get('/user/:userId', (req, res) => {
  userApi.getSingleUser(req.params.userId)
    .then((singleUser) => {
      res.render('user/singleUser', singleUser)
 //     res.json(singleUser)
    })
})
//update
userRouter.put('/user/:userId', (req, res) => {
  userApi.editUser(req.params.userId, req.body)
    .then((editUser) => {
      res.redirect(`/user/${req.params.userId}`)
 //     res.json(editUser)
    })
})
//create ****************for some reason it is not changing the inner workings just making an id and ish. idk.
userRouter.post('/user', (req, res) => {
  userApi.addNewUser(req.body)
    .then((createUser) => {
      res.redirect('/user')
 //     res.json(createUser)
    })
})
//delete
userRouter.delete('/user/:userId', (req, res) => {
  userApi.deleteUser(req.params.userId)
    .then((deleteUser) => {
      res.redirect('/user')
//      res.json(deleteUser)
    })
})

module.exports = {
  userRouter
}
