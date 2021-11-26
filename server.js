const {sequelize} = require('./models');
const {app} = require('./app')

const port = 5000;

app.listen({port}, async () => {
  console.log(`listening on port ${port}!`);
  await sequelize.sync(); // connect database
  console.log('Database synced!')
})
