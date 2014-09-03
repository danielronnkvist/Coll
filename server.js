var express = require("express"),
    fs = require('fs')

var app = express();
var root_path = __dirname

// Express settings
require('./config/express.js')(app, root_path)

// Require model
// Bootstrap models
var models_path = root_path + '/app/models'
fs.readdirSync(models_path).forEach(function (file) {
  if (~file.indexOf('.js')) require(models_path + '/' + file)
})

// Bootstrap routes
require('./config/routes.js')(app)

var server = app.listen(3000, function() {
  console.log("Listening on port %d", server.address().port);
});
