const UserService = require('../services/userService');

const createUser = async (req, res) => {
  try {
    const { headers } = req;

    const response = await UserService.getInstance().createNewUser(headers);

    res.send(response);
  } catch (error) {
    res.status(400).json({ error: `User error: ${error.message}`});
  }
};

const deleteUser = async (req, res) => {
  try {
    const { headers: { id } } = req;

    const response = await UserService.getInstance().removeUser(id);

    res.send(response);
  } catch (error) {
    res.status(400).json({ error: `User error: ${error.message}`});
  }
};

module.exports = {
  createUser,
  deleteUser,
}