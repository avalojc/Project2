const mongoose = require('./connection.js')
const UserSchema = new mongoose.Schema({
   //logInSchema
  user: String,
  password:String,
  // voyageId: mongoose.ObjectId, 
})

const UserCollection = mongoose.model('User', UserSchema)
//getall
const getAllUser = () => {
  return UserCollection.find({})
}
//get all users by voyage id????
const getAllUserVoyageByVoyageId = (voyageId) => {
  return UserCollection.find({voyageId: voyageId})
}

//getone
const getSingleUser = (UserId) => {
  return UserCollection.findById(UserId)
}
//create
const addNewUser = (createUser) => {
  return UserCollection.create(createUser)
}
//edit
const editUser = (UserId, updateUser) => {
  return UserCollection.updateOne({_id: UserId}, updateUser)
}
//delete
const deleteUser = (UserId) => {
  return UserCollection.deleteOne({_id: UserId})
}

module.exports = {
  getAllUser,
  getAllUserVoyageByVoyageId,
  getSingleUser,
  addNewUser,
  editUser,
  deleteUser,
}
