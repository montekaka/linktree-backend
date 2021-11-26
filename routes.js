const {linksController, listItemsController} = require('./controllers');

module.exports = (app) => {
  app.get(`/v1/users/:userId/links`, linksController.getAllByUserId)
  app.post(`/v1/users/:userId/links`, linksController.create)
  app.get(`/v1/users/:userId/links/:id`, linksController.get)
  app.delete(`/v1/users/:userId/links/:id`, linksController.remove)
  app.put(`/v1/users/:userId/links/:id`, linksController.update)
  app.post(`/v1/links/:linkId/listItems`, listItemsController.create)
  app.delete(`/v1/links/:linkId/listItems/:id`, listItemsController.remove)  
}