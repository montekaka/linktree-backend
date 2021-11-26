const {User, Link} = require('../models');
const {filterObject} = require('../libs')

// GET /v1/users/:userId/links
// return 
// [
//   {
//   "id": 9,
//   "userId": 3,
//   "type": "music_player",
//   "title": "&Twice",
//   "url": null,
//   "createdAt": "2021-11-25T21:41:24.083Z",
//   "updatedAt": "2021-11-25T21:41:24.083Z",
//   "listItems": [
//   {
//   "id": 8,
//   "linkId": 9,
//   "title": "Spotify",
//   "location": null,
//   "showTime": null,
//   "soldOut": null,
//   "onSale": null,
//   "url": "https://open.spotify.com/album/2MwyDQhotK4B1WcZ5ogrtB",
//   "embedPlayerUrl": "https://open.spotify.com/embed/album/2MwyDQhotK4B1WcZ5ogrtB",
//   "createdAt": "2021-11-25T22:05:59.537Z",
//   "updatedAt": "2021-11-25T22:05:59.537Z"
//   }
//   ]
//   },
//   ...
// ]
const getAllByUserId = async (req, res) => {
  const {userId} = req.params;
  try {
    // const user = await User.findOne({where: {id: userId}});
    // const links = await user.getLinks();  
    const links = await Link.findAll({
      where: {userId: userId}, 
      order: [['createdAt', 'DESC']],
      include: 'listItems'
    })
    return res.json(links);
  } catch (err) {
    console.log(err);
    return res.status(500).json({error: "Something went wrong"})
  }
}

// POST /v1/users/:userId/links
// example
// {
//   userId: 2, (require)
//   type:"classic", (require)
//   url: "https://www.google.com", (option, depends on type)
//   title: "Google"  (option, depends on type)
// }
const create = async (req, res) => {
  const {userId} = req.params;
  const {title, type, url} = req.body;
  
  try {
    const user = await User.findOne({where: {id: userId}}); // TODO: change this to a model validation
    if(!user) return res.status(500).json({error: [{message: "User not found"}]})
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
    if(!user) return res.status(500).json({error: [{message: "User not found"}]})
    
    const link = await Link.findOne({where: {id, userId}})
    return res.json(link);
  } catch (err) {
    console.log(err)
    // const messages = err.errors.map((error) =>  {return {message: error.message}});
    return res.status(500).json({error: "Something went wrong"})
  }  
}

// DELETE /v1/users/:userId/links/id
const remove = async (req, res) => {
  const {userId, id} = req.params;
  try {
    const user = await User.findOne({where: {id: userId}});
    if(!user) return res.status(500).json({error: [{message: "User not found"}]})

    const link = await Link.findOne({where: {id, userId}})
    await link.destroy()
    return res.json(link);
  } catch (err) {
    console.log(err)
    // const messages = err.errors.map((error) =>  {return {message: error.message}});
    return res.status(500).json({error: "Something went wrong"})
  }  
}

// PUT /v1/users/:userId/links/id
// example
// {
//   type:"classic",
//   url: "https://www.google.com",
//   title: "Google"
// }
const update = async (req, res) => {
  const {userId, id} = req.params;
  const {title, type, url} = req.body;
  const updateData = filterObject.removeUndefined({title, type, url})

  try {
    const user = await User.findOne({where: {id: userId}});
    if(!user) return res.status(500).json({error: [{message: "User not found"}]})

    const link = await Link.findOne({where: {id, userId}})
    link.set({...link, ...updateData});
    await link.save();
    return res.json(link);
  } catch (err) {
    const messages = err.errors.map((error) =>  {return {message: error.message, filed: error.path}});
    return res.status(500).json({error: messages})
  }  
}

module.exports = {
  getAllByUserId,
  create,
  get,
  remove,
  update
}