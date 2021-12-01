const {sequelize} = require('./models');
const {app} = require('./app')

const port = process.env.PORT || 8080;
let retires = 5; // retry to connect to database

app.listen({port}, async () => {
  console.log(`listening on port ${port}!`);
  await sequelize.sync(); // connect database
  console.log('Database synced!')
})
