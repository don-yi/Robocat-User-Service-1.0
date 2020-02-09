const express = require('express')
const app = express()

const port = 3100

app.use((req, res, next) => {
  console.log('Hit the global middleware')
  next()
})

app.get('/', (req, res) => {
  console.log('Hit the root get handler')
  res.send('Hello, world!')
})

app.listen(port)
console.log('Started server.')
