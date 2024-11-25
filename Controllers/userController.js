const User = require('../models/user');

// Render registration form
exports.showRegistrationForm = (req, res) => {
  res.render('users/register');
};

// Handle user registration
exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  const newUser = new User({ username, email, password });
  await newUser.save();
  res.render('users/success', { username });
};
