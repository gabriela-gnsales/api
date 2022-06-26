const userService = require('../services/userService');

const postUser = async (req, res) => {
  const { telephone, password, name, email } = req.body;
  const response = await userService.createUser(name, telephone, email, password);
  return res.status(response.statusCode).json(response.data);
}

module.exports = {
    postUser,
  }