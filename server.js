const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.resolve(__dirname, 'dist')))

app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'))
})

app.listen(4000, function() {
  console.log('server is listening on port 4000')
})