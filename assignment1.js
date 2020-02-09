const http = require('http')
const port = '3100'

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain'})
  res.end('Hello World\n')
} ).listen(port, () => {
  console.log(`Server running on port ${port}`)
})
