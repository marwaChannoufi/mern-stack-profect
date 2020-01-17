const mongoose =require("mongoose")
const Schema = mongoose.Schema

const courseSchema = new Schema({

    titel:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    categorie:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    },
    teacher:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }

})
module.exports=course=mongoose.model('courses',courseSchema)