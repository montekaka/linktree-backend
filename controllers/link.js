const {User, Link} = require('../models');

// GET /v1/users/:userId/links
const getAllByUserId = async (req, res) => {
  const {userId} = req.params;
  try {
    const user = await User.findOne({where: {id: userId}});
    const links = await user.getLinks();
    return res.json(links);
  } catch (err) {
    console.log(err);
    return res.status(500).json({error: "Something went wrong"})
  }
}

// POST /v1/users/:userId/links
const create = async (req, res) => {
  const {userId} = req.params;
  const {title, type, url} = req.body;
  
  try {
    const user = await User.findOne({where: {id: userId}});
    const link = await Link.create({title, url, type, userId});
    return res.json(link);
  } catch (err) {
    const messages = err.errors.map((error) =>  {return {message: error.message, filed: error.path}});
    return res.status(500).json({error: messages})
  }
}

// GET /v1/users/:userId/links/id
const get = async (req, res) => {
  const {userId, id} = req.params;
  try {
    const user = await User.findOne({where: {id: userId}});
    const link = await Link.findOne({where: {id, userId}})
    return res.json(link);
  } catch (err) {
    console.log(err)
    // const messages = err.errors.map((error) =>  {return {message: error.message}});
    return res.status(500).json({error: "Something went wrong"})
  }  
}

module.exports = {
  getAllByUserId,
  create,
  get
}