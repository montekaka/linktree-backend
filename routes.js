const {linksController} = require('./controllers');

module.exports = (app) => {
  app.get(`/v1/users/:userId/links`, linksController.getAllByUserId)
  app.post(`/v1/users/:userId/links`, linksController.create)
}