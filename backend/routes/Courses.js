const express= require("express")
const router =express.Router()

const course = require('../models/Courses')


router.get("/", (req, res) => {
    course.find()
      .then(courses => res.json(courses))
      .catch(err => res.send("cannot get"));
  });
  router.post("/", (req, res) => {
    const newcourse = new course({
      titel: req.body.titel,
      description: req.body.description,
      categorie: req.body.categorie,
      link:req.body.link,
      teacher:req.body.teacher
    });
  
    newcourse
      .save()
      .then(courses => res.json(courses))
      .catch(err => res.send("cannot post"));
  });
  

  

router.delete('/:id',(req,res)=>{
  course.findById(req.params.id)
      .then(course=>course.remove().then(()=>res.json({success:true})))
      .catch(err=>res.status(404).json({success:false}))
})

// done by safwen and the same fucton with delate item



  // router.put("/:id", (req, res) => {
  //   const coursesListe = req.body;
  //   course.findOneAndUpdate({ _id: req.params.id }, { $set: { ...coursesListe } })
  //     .then(data => res.send({ success: true }))
  //     .catch(err => res.send({ success: false }));
  // });


  // router.post('/update/:id',(req,res)=>{
  //   course.findById(req.params.id,(err,course)=>{
  //     if(!course)
  //       res.status(404).send('data is not found');
  //     else
  //       course.titel= req.body.course.titel;
  //       course.description= req.body.course.description;
  //       course.categorie=req.body.course.categorie;
  //       course.link=req.body.course.link

  //       course.save().then(course=>{
  //       res.json('course updated');

  //     })
  //     .catch((err=>{
  //       res.status(400).send('update not possible')
  //     }))
  //   })
  // })

  // get a single courses
  // get a single student 


router.route('/edit_course/:id').get((req,res)=>{
  course.findById(req.params.id,(error,data)=>{
      if(error){
          return next(error)
      }else{
          res.json(data)
      }
  })

});

// // update student


  router.route('/update_course/:id').put((req,res,next)=>{
    course.findByIdAndUpdate(req.params.id,{
        $set:req.body
    },(error,data)=>{
        if(error){
            return next(error)
            console.log(error)
        }else{
            res.json(data)
            console.log('student updated successfully')
        }
    })

})





module.exports=router