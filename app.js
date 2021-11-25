const express = require('express');
const {sequelize} = require('./models');

const port = 5000;
const app = express();
app.use(express.json());

require('./routes')(app); // connect routes

app.listen({port}, async () => {
  console.log(`listening on port ${port}!`);
  await sequelize.sync(); // connect database
  console.log('Database synced!')
})
