const express = require('express'),
  app = express(),
  controller = require('./controller/controller'),
  routes = express.Router();


routes.get('/', (req, res) => {
  res.render('index', {
    title: 'JSON to PDF/DOC'
  });
});

routes.get('/pdf', controller.convertBodyToPDF)

module.exports = routes;