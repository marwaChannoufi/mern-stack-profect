let mongoose=require('mongoose')
 express=require('express')
 router=express.Router()

//  teacher model 
// let teacherSchema= require('../models/teacher')


const teacher = require('../models/teacher')


// create teacher
router.post("/", (req, res) => {
    const newteacher = new teacher({
      name: req.body.name,
      email: req.body.email,
      description: req.body.description,
      link:req.body.link,
    });
  
    newteacher
      .save()
      .then(teachers => res.json(teachers))
      .catch(err => res.send("cannot post"));
  });



// read teacher

router.get("/", (req, res) => {
    teacher.find()
      .then(teachers => res.json(teachers))
      .catch(err => res.send("cannot get"));
  });

// get a single teacher


router.route('/edit_teacher/:id').get((req,res)=>{
    teacher.findById(req.params.id,(error,data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })

});


// update teacher

router.route('/update_teacher/:id').put((req,res,next)=>{
    teacher.findByIdAndUpdate(req.params.id,{
        $set:req.body
    },(error,data)=>{
        if(error){
            return next(error)
            console.log(error)
        }else{
            res.json(data)
            console.log('teachert updated successfully')
        }
    })

})


// delete teacher
router.route('/delete_teacher/:id').delete((req,res,next)=>{
    teacher.findByIdAndRemove(req.params.id,(error,data)=>{
        if(error){
            return next(error)
        }else{
            res.status(200).json({
                msg:data
            })
        }
    })
})


module.exports = router