const {User, Link, ListItem} = require('../models');
const {filterObject} = require('../libs')

// POST /v1/links/:linkId/listItems
// data
// {
//   linkId: 8, 
//   title: "Apple Podcasts", 
//   url: "https://podcasts.apple.com/us/podcast/acquired/id1050462261", embedPlayerUrl: "https://embed.podcasts.apple.com/us/podcast/acquired/id1050462261"
// }
const create = async (req, res) => {
  const {linkId} = req.params;
  const {title, location, showTime, soldOut, onSale, url, embedPlayerUrl} = req.body;
  const newData = filterObject.removeUndefined({title, location, showTime, soldOut, onSale, url, embedPlayerUrl});

  try {
    const link = await Link.findOne({where: {id: linkId}});
    if(!link) return res.status(500).json({error: [{message: "Link not found"}]})
    
    const listItem = await ListItem.create({...newData, linkId})
    return res.json(listItem);
  } catch (err) {
    const messages = err.errors.map((error) =>  {return {message: error.message, filed: error.path}});
    return res.status(500).json({error: messages})
  }
}

// DELETE /v1/links/:linkId/listItems/:id
const remove = async (req, res) => {
  const {linkId, id} = req.params;
  try {
    const link = await Link.findOne({where: {id: linkId}});
    if(!link) return res.status(500).json({error: [{message: "Link not found"}]})
    
    const listItem = await ListItem.findOne({where: {id: id, linkId}})
    await listItem.destroy()
    return res.json(listItem);
  } catch (err) {
    return res.status(500).json({error: "Something went wrong"})
  }
}

// TODO:
// - PUT request to update list item
// - GET request to view a single list item
// - POST request to bulk create list items
// - POST reqeust to bulk update list items

module.exports = {
  create,
  remove
}