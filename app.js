const express = require('express'),
      app = express(),
      ejs = require('ejs'),
      routes = require ('./routes');


app.set('views', 'views');

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

app.use('/jsfiles', express.static(__dirname + '/static'));
app.use('/',routes);

module.exports = app;