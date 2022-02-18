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


//get all blogs
router.get("/blogs",withAuth, async (req, res) => {
  try {
    const blogs = (await Blog.findAll({ include: [User] })).map((blog) =>
      blog.get({ plain: true })
    );
    res.render("blogsLoggedIn", { layout: "dashboard", blogs });
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});


module.exports = router;
