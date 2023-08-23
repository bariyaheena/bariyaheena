const mongoose=require('mongoose');
let studentSchema= new mongoose.Schema({
    name: {
      type: String,
      required: true,
  },
  roll: {
      type: String,
      required: true,
      unique: true,    
  },
  registration: {
      type: String,
      required: true,
      unique: true,
  },
  subjects: {
      type: [String],
      required: true,
  },
  registered_on: {
      type: Date,
      default: new Date(),
  }
})
module.exports=mongoose.model('nodeuser',studentSchema);