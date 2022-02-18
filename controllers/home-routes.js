const router = require("express").Router();
const { Blog, User } = require("../models/");

router.get("/", (req, res) => {
  {
    res.render("homepage");
  }
});

router.get("/blogs", async (req, res) => {
  try {
    const blogs = (await Blog.findAll({ include: [User],})).map((blog) =>
      blog.get({ plain: true })
    );
     res.render("blogs", { blogs });
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});

//get single
router.get("/blogs/:id", async (req, res) => {
  try {
    const blog = (await Blog.findByPk(req.params.id)).get({ plain: true });
    res.render("singleblog", { ...blog });
  } catch (err) {
    res.sendStatus(500).send(err);
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
