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
      name,
      picture,
    }).save();
    res.json(newUser);
    console.log("New user created");
  }
};
