const {User, Link, ListItem} = require('../models');
const {filterObject} = require('../libs')

const create = async (req, res) => {
  const {linkId} = req.params;
  const {title, location, showTime, soldOut, onSale, url, embedPlayerUrl} = req.body;
  const newData = filterObject.removeUndefined({title, location, showTime, soldOut, onSale, url, embedPlayerUrl});

  try {
    const link = await Link.findOne({where: {id: linkId}}); // TODO: change this to a model validation
    if(!link) return res.status(500).json({error: [{message: "Link not found"}]})
    
    const listItem = await ListItem.create({...newData, linkId})
    return res.json(listItem);
  } catch (err) {
    const messages = err.errors.map((error) =>  {return {message: error.message, filed: error.path}});
    return res.status(500).json({error: messages})
  }
}

module.exports = {
  create
}