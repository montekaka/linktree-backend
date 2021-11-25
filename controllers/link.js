const {User, Link} = require('../models');

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

module.exports = {
  getAllByUserId,
  create
}