const express = require('express')
const students = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


const Student = require('../models/Students')
students.use(cors())

process.env.SECRET_KEY = 'secret'


students.get("/", (req, res) => {
  Student.find()
    .then(student => res.json(student))
    .catch(err => res.send("cannot get"));
});

students.post('/register', (req, res) => {
    const today = new Date()
    const studentData = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      created: today
    }

    Student.findOne({
        email: req.body.email
      })
        .then(student => {
          if (!student) {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
              studentData.password = hash
              Student.create(studentData)
                .then(student => {
                  res.json({ status: student.email + 'Registered!' })
                })
                .catch(err => {
                  res.send('error: ' + err)
                })
            })
          } else {
            res.json({ error: 'Student already exists' })
          }
        })
        .catch(err => {
          res.send('error: ' + err)
        })
    })


    students.post('/login', (req, res) => {
        Student.findOne({
          email: req.body.email
        })
          .then(student => {
            if (student) {
              if (bcrypt.compareSync(req.body.password, student.password)) {
                // Passwords match
                const payload = {
                  _id: student._id,
                  firstName: student.firstName,
                  lastName: student.lastName,
                  email: student.email
                }
                let token = jwt.sign(payload, process.env.SECRET_KEY, {
                  expiresIn: 1440
                })
                res.send(token)
              } else {
                // Passwords don't match
                res.json({ error: 'Student does not exist' })
              }
            } else {
              res.json({ error: 'Student does not exist' })
            }
          })
          .catch(err => {
            res.send('error: ' + err)
          })
      })

      students.get('/profile', (req, res) => {
        var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
      
        Student.findOne({
          _id: decoded._id
        })
          .then(student => {
            if (student) {
              res.json(student)
            } else {
              res.send('Student does not exist')
            }
          })
          .catch(err => {
            res.send('error: ' + err)
          })
      })
      
      module.exports = students