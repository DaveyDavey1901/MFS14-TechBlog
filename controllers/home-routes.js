const router = require("express").Router();

router.get("/new", (req, res) => {
  {
    res.render("newBlog");
  }
});

router.get("/", (req, res) => {
  {
    res.render("homepage");
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

router.get("/blogs", (req, res) => {
  {
    res.render("blogs");
  }
});
module.exports = router;
