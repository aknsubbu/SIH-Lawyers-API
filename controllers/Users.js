const Users = require("../models/UsersSchema");
const bcrypt = require("bcryptjs");

const UsersId = async (req, res) => {
  try {
    const user = await Users.findById(req.params.userId);
    res.status(200).json(user);
  } catch (err) {
    res.json({ message: err });
  }
};

const UsersAll = async (req, res) => {
  try {
    const user = await Users.find();
    res.status(200).json(user);
  } catch (err) {
    res.json({ message: err });
  }
};

const UsersAdd = async (req, res) => {
  try {
    const user = new Users(req.body);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;
    const savedUser = await user.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.json({ message: err });
  }
};

const UsersDelete = async (req, res) => {
  try {
    const removedUser = await Users.findByIdAndDelete({
      _id: req.params.userId,
    });
    res.status(200).json(removedUser);
  } catch (err) {
    res.json({ message: err });
  }
};

const UsersUpdate = async (req, res) => {
  try {
    const id = req.params.userId;
    const user = req.body;
    const updatedData = await Users.findByIdAndUpdate(id, user, { new: true });
    res.status(200).json(updatedData);
  } catch (err) {
    res.json({ message: err });
  }
};

const UsersCheck = async (req, res) => {
  try {
    const id = req.params.userId;
    const user = await Users.findById(id);
    if (user.isUTP) {
      res.status(200).json({ message: "UTP" });
    }
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = {
  UsersId,
  UsersAll,
  UsersAdd,
  UsersDelete,
  UsersUpdate,
  UsersCheck,
};
