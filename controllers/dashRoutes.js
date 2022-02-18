const router = require("express").Router();
const { Blog, User } = require("../models/");
const withAuth = require("../utils/auth");

router.get("/", withAuth, (req, res) => {
  res.render("homeloggedIn", {
    layout: "dashboard",
  });
});

router.get("/new", withAuth, (req, res) => {
  res.render("newBlog", {
    layout: "dashboard",
  });
});

router.get("/blogs", withAuth, (req, res) => {
  res.render("blogsLoggedIn", {
    layout: "dashboard",
  });
});

module.exports = router;
