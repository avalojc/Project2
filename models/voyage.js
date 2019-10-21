const mongoose = require('./connection.js')
const VoyageSchema = new mongoose.Schema({
  //overall trip
  nameTrip: String,
  whereFrom: String, //atlanta
  whereTo: String,  //A Corun~a
  dateStart: Date,  //dec 13
  dateEnd: Date,  
  flexibleDate: Boolean,
  // //logInSchema
  // user: String,
  // password:String,
  // //leg maker
  // hubInitial: String, //start of leg
  // hubTerminus: String, //end of leg
  // direction: Boolean, //going home or coming back
  // oneWayOrRoundTrip: Boolean, //round trip or one way?
  // methodOfTransport: String, //Planes, Trains, Automobile, Bus, Scooter, Hitchhiking, TukTuk, ect
  // costOfLeg: Number,
})

const VoyageCollection = mongoose.model('Voyage', VoyageSchema)
//getall
const getAllVoyage = () => {
  return VoyageCollection.find({})
}
//getone
const getSingleVoyage = (voyageId) => {
  return VoyageCollection.findById(voyageId)
}
//create
const addNewVoyage = (createVoyage) => {
  return VoyageCollection.create(createVoyage)
}
//edit
const editVoyage = (voyageId, updateVoyage) => {
  return VoyageCollection.updateOne({_id: voyageId}, updateVoyage)
}
//delete
const deleteVoyage = (voyageId) => {
  return VoyageCollection.deleteOne({_id: voyageId})
}

module.exports = {
  getAllVoyage,
  getSingleVoyage,
  addNewVoyage,
  editVoyage,
  deleteVoyage
}
