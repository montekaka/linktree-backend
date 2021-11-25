const {User} = require('../models');

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

module.exports = {
  getAllByUserId
}