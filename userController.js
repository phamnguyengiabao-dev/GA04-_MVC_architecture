const User = require('../models/user');

exports.registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    await user.save();
    res.redirect('/users/register');
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && await user.comparePassword(password)) {
        res.send('Login successful');
    } else {
        res.send('Invalid email or password');
    }
};
