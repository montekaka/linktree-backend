const express = require('express');

const app = express();
app.use(express.json());

require('./routes')(app); // connect routes

module.exports = {
  app
};
