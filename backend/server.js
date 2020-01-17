var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
const mongoose = require('mongoose')


const fileUpload = require('express-fileupload')


var port = process.env.PORT || 5000

app.use(fileUpload())

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

const mongoURI = 'mongodb://localhost:27017/ProjectFinal'

mongoose
  .connect(
    mongoURI,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

var Students = require('./routes/Students')
const course =require('./routes/Courses')
const teacher =require('./routes/teacher')

app.use('/students', Students)
app.use('/courses',course)
app.use('/teachers',teacher)

// upload endpoint from traversy media 

app.post('/upload',(req,res)=>{
  if(req.files===null){
    return res.status(400).json({msg:'no file uploaded'});
  }

  const file = req.files.file;
  file.mv(`${__dirname}/../frontend/aadmin/admin/public/uploads/${file.name}`,err=>{
    if(err){
      console.error(err);
      return res.status(500).send(err)
    }
    res.json({fileName:file.name,filePath:`/uploads/${file.name}`})
  })

})



app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})