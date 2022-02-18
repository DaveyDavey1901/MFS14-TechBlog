const router = require("express").Router();
const { User } = require("../../models");

//This route is used to create a new user.
router.post("/", async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.userId = newUser.id;
      req.session.username = newUser.username;
      req.session.loggedIn = true;

      res.json(newUser);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// This route is to check for a valid username and password
//if there is one user is logged in.
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { username: req.body.username },
    });

    if (!userData) {
      res
        .status(400)
        .json({ message: "User name not found, please try again" });
      return;
    }

    const validPassword = userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.userid = userData.id;
      req.session.username = userData.username;
      req.session.loggedIn = true;

      res.json({
        user: userData,
        message: "Welcome you are now logged in!"});
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// this route will end the session and log the user out.
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
