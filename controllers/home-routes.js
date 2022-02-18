const router = require("express").Router();

router.get("/", (req, res) => {
  {
    res.render("homepage");
  }
});

router.get("/new", (req, res) => {
  {
    res.render("newBlog");
  }
});

router.get("/blogs", (req, res) => {
  {
    res.render("blogs");
  }
});

//login route to the login hbs
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});
//signup route to the signup hbs
router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

module.exports = router;
