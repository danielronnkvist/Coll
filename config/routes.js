var pages = require('../app/controllers/pages.js'),
    express = require('express')

module.exports = function(app) {
  app.get('/', pages.startPage)
}
