const mongoose =require("mongoose")
const Schema = mongoose.Schema

let teacherSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  description: {
    type: String
  },


  link:{
    type:String,
    required:true
  }
}
 )

module.exports=teacher=mongoose.model('teachers',teacherSchema)