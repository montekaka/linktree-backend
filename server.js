const {sequelize} = require('./models');
const {app} = require('./app')

const port = process.env.PORT || 8080;

app.listen({port}, async () => {
  console.log(`listening on port ${port}!`);
  await sequelize.sync(); // connect database
  console.log('Database synced!')
})
