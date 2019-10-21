const mongoose = require('./connection.js')
const UserSchema = new mongoose.Schema({
   //logInSchema
  user: String,
  password:String,
  // //leg maker
  // hubInitial: String, //start of leg
  // hubTerminus: String, //end of leg
  // direction: Boolean, //going home or coming back
  // oneWayOrRoundTrip: Boolean, //round trip or one way?
  // methodOfTransport: String, //Planes, Trains, Automobile, Bus, Scooter, Hitchhiking, TukTuk, ect
  // costOfLeg: Number,
})

const UserCollection = mongoose.model('User', UserSchema)
//getall
const getAllUser = () => {
  return UserCollection.find({})
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
  getSingleUser,
  addNewUser,
  editUser,
  deleteUser
}
