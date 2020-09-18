var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')

var app = express()
app.use(serveStatic(path.join(__dirname, 'dist')))

var port = process.env.PORT || 8000
app.listen(port)
console.log('server started ' + port)

app.get('*', function (req, res) {
    res.sendfile('./dist/index.html'); // load our index.html file
  });
