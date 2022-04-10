const User = require("../models/user");

exports.createOrUpdateUser = async (req, res) => {
  const { name, picture, email } = req.user;

  const user = await User.findOneAndUpdate(
    { email: email },
    { name, picture },
    { new: true }
  );
  if (user) {
    console.log("User updated");
    res.json(user);
  } else {
    const newUser = await new User({
      email,
      name: email.split("@")[0],
      picture,
    }).save();
    res.json(newUser);
    console.log("New user created");
  }
};

exports.currentUser = async (req, res) => {
  User.findOne({ email: req.user.email }).exec((err, user) => {
    if (err) {
      throw new Error(err);
    } else {
      res.json(user);
    }
  });
};
