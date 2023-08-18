//user controller
const User = require("../models/User");
const bcrypt = require("bcryptjs");

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).send("User not found");
  }
  const isMatch = bcrypt.compareSync(password, user.password);
  if (!isMatch) {
    return res.status(400).send("Incorrect password");
  }
  return res.status(200).send(user);
};

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  const checkIfUserExists = await User.findOne({ email });
  if (checkIfUserExists) {
    return res.status(400).send("User already exists");
  }
  const newUser = new User({
    name,
    email,
    password: bcrypt.hashSync(password, 10),
  });
  let savedUser = await newUser.save();
  if (savedUser) {
    return res.status(200).send(savedUser);
  }
  return res.status(500).send("Something went wrong");
};
