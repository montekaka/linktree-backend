const {sequelize} = require('./models');
const {app} = require('./app')

const port = process.env.PORT || 8080;
let retires = 5; // retry to connect to database

app.listen({port}, async () => {
  console.log(`listening on port ${port}!`);
  await sequelize.sync(); // connect database
  console.log('Database synced!')
  // while(retires) {
  //   try {
  //     await sequelize.sync(); // connect database
  //     console.log('Database synced!')
  //     break;
  //   } catch (err) {
  //     console.log(err);
  //     retires -= 1;
  //     console.log(`retires left: ${retires}`);
  //     // wait 5 seconds
  //     await new Promise(res => setTimeout(res, 5000))
  //   }
  // }

})
