const http = require('http')
const moment = require('moment')
const port = '3100'

http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World\n')
}).listen(port, () => {
  let timestamp = moment()
  console.log(`Server started on port ${port} at ${timestamp}`)
})
