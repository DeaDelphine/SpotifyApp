const User = require("../models/userModel");

const create = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.json(user);
  } catch (error) {
    res.json({ mesage: error.mesage });
  }
};
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = { create, getUsers };
