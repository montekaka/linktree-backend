const {linksController} = require('./controllers');

module.exports = (app) => {
  app.get(`/v1/:userId/links`, linksController.getAllByUserId)
}