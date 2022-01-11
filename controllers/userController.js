const User = require("../models/user");
const { updateCheck } = require("../helpers/validate");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).select("-password -__v");
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password -__v");
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "user has been deleted successfully " });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
const UpdateUser = async (req, res) => {
  const { error } = updateCheck(req.body);
  if (error) return res.status(401).json({ message: error.message });
  try {
    //validate
    const user = await User.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    if (!user)
      return res
        .status(200)
        .json({ message: "User has been updated successfully " });
    res.status(200).json({ message: "User has been updated successfully " });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = { getUserById, getAllUsers, deleteUserById, UpdateUser };
