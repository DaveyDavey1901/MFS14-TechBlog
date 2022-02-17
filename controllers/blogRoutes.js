const router = require("express").Router();
const { Blog } = require("../models/");

//get all blogs
router.get("/", async (req, res) => {
  try {
    const blogs = (await Blog.findAll()).map((blog) =>
      blog.get({ plain: true })
    );
    res.render("blogs", { blogs });
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});

//get single
router.get("/:id", async (req, res) => {
  try {
    const blog = (await Blog.findByPk(req.params.id)).get({ plain: true });
    res.render('singleblog', { ...blog, });
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});

module.exports = router;
