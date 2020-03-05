// Add require's
const express = require('express')
const base64url = require('base64url')
const uuid4 = require('uuid4')

// Const's
const app = express()
const port = 3100

// 
let allUsrById = {}
let allUsrByUsrname = {}

// Use expr
app.use(express.json())

// ------ lab example
app.get('/', (req, res) => {
  console.log('Hit the root get handler')
  res.send('Hello, world!')
})

// Start listening
app.listen(port)
console.log('Started server.')

// Creates a new user, succeeding if that user did not already exist
app.post('/api/v1/users/', (req, res) => {
  // Get usr data from req
  let usr = req.body
  // ??????????????? why uname to id???
  usr.id = base64url(usr.username)

  // Prevent dupl
  if (allUsrById[usr.id] != undefined) {
    res.sendStatus(409)
  }

  // Assign to all usr ls
  allUsrById[usr.id] = usr
  allUsrByUsrname[usr.username] = usr
  
  // Send usr data
  res.send(usr)
})

// Login
app.post('/api/v1/login/', (req, res) => {
  let usr = allUsrByUsrname[req.body.username]

})