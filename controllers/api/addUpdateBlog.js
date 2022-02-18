const router = require("express").Router();
const { Blog } = require("../../models");
const withAuth = require("../../utils/auth");

//add a blog
router.post("/",withAuth, async (req, res) => {
  try {
    const newBlog = await Blog.create({
      title: req.body.title,
      contents: req.body.contents,
    });
    res.json(newBlog);
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});

//update a blog
router.put("/:id", withAuth, async (req, res) => {
  try {
    const updateBlog = await Blog.update(req.body);
    res.json(updateBlog);
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});

//delete a blog
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const deleteBlog = await Blog.destroy(req.body);
    res.json(deleteBlog);
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});

module.exports = router;
