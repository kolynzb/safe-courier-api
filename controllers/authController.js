const User = require("../models/User");
const bcrypt = require("bcrypt");
const { sendCookieResponse } = require("../middleware/jwt");
const { signUpCheck, signInCheck } = require("../helpers/validate");

const signup = async (req, res) => {
  //validate user
  const { error } = signUpCheck(req.body);
  if (error) return res.status(401).json({ message: error.message });

  const { name, email, password } = req.body;
  //checking if user exists
  const exists = await User.findOne({ email });
  if (exists) return res.status(400).json({ message: "User already exists" });
  const hashedPassword = await bcrypt.hash(password, 12);
  const user = await new User({ name, email, password: hashedPassword });

  const newUser = await user.save();
  const payload = await newUser;
  if (newUser)
    return res.status(201).json({ message: "User created  successfully" });
  sendCookieResponse({
    res,
    StatusCode: 201,
    user: {
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
    },
    options: { expiresIn: "1h" },
  });
};

const signin = async (req, res) => {
  const { error } = signInCheck(req.body);
  if (error) return res.status(401).json({ message: error.message });

  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "User Doesnt exist" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Incorrect Password" });

  sendCookieResponse({
    res,
    StatusCode: 200,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
    options: { expiresIn: "1h" },
  });
};
module.exports = { signin, signup };
