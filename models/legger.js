const mongoose = require('./connection.js')
const LeggerSchema = new mongoose.Schema({
  //overall trip

  //leg maker
  leg: String,
  hubInitial: String, //start of leg
  hubTerminus: String, //end of leg
  direction: Boolean, //going home or coming back
  oneWayOrRoundTrip: Boolean, //round trip or one way?
  methodOfTransport: String, //Planes, Trains, Automobile, Bus, Scooter, Hitchhiking, TukTuk, ect
  costOfLeg: Number,
})

const LeggerCollection = mongoose.model('Legger', LeggerSchema)
//getall
const getAllLegger = () => {
  return LeggerCollection.find({})
}
//getone
const getSingleLegger = (leggerId) => {
  return LeggerCollection.findById(leggerId)
}
//create
const addNewLegger = (createLegger) => {
  return LeggerCollection.create(createLegger)
}
//edit
const editLegger = (leggerId, updateLegger) => {
  return LeggerCollection.updateOne({_id: leggerId}, updateLegger)
}
//delete
const deleteLegger = (leggerId) => {
  return LeggerCollection.deleteOne({_id: leggerId})
}

module.exports = {
  getAllLegger,
  getSingleLegger,
  addNewLegger,
  editLegger,
  deleteLegger
}
