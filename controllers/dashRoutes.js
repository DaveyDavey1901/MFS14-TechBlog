const router = require("express").Router();
const { Blog, User } = require("../models/");
const withAuth = require("../utils/auth");


router.get("/", withAuth, (req, res) => {
    res.render("homeloggedIn", {
    layout: "dashboard",
  });
});

//route to reates a new tech blog post
router.get("/new", withAuth, (req, res) => {
  res.render("newBlog", {
    layout: "dashboard",
  });
});


//get all blogs that the user has created so far.
router.get("/blogs",withAuth, async (req, res) => {
  try {
    const blogs = (await Blog.findAll({
      where:{"userId": req.session.userId},
      include: [User]
    })).map((blog) =>
      blog.get({ plain: true })
    );
    res.render("blogsLoggedIn", { layout: "dashboard", blogs });
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});

//get single
router.get("/blogs/:id",withAuth, async (req, res) => {
  try {
    const blog = (await Blog.findByPk(req.params.id, { include: [User],})).get({ plain: true });
    res.render("singleblog", { layout: "dashboard", ...blog });
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});

module.exports = router;
