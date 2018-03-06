const http = require('http');
var fs = require('fs');
const portNumber = 3000;

const express = require ('express'),
      app = require ('./app'),
      port = process.env.PORT || portNumber;

// Inicialización del servidor //
app.listen(port, () => {
  console.log('Server started at port: '+portNumber);
})