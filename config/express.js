var express = require('express'),
    ejs = require('ejs')

module.exports = function(app, root_path) {
  // For the POST request
  app.set('port', process.env.PORT || 3000)

  // Static folder with resources
  app.use(express.static(root_path + "/public"))

  app.engine('html', require('ejs').renderFile);
  app.set('views', root_path+'/app/views')
}
