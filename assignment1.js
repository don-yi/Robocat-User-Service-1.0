const express = require('express')
const app = express()
const port = 3100

app.get('/', (req, res) => {
  console.log('Hit the root get handler')
  res.send('Hello, world!')
})

app.listen(port)
console.log('Started server.')
