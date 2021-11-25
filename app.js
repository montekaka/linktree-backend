const express = require('express');
const {sequelize} = require('./models');

const port = 5000;
const app = express();
app.use(express.json());

app.listen({port}, async () => {
  console.log(`listening on port ${port}!`);
  await sequelize.sync();
  console.log('Database synced!')
})
