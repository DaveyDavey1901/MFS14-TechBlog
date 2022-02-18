const router = require("express").Router();

const blogRoutes = require("./addUpdateBlog.js");
const userRoutes = require("./userRoutes");
// const commentRoutes = require("./commentRoutes.js");

router.use("/blogs", blogRoutes);
router.use("/users", userRoutes);
// router.use("/comment", commentRoutes);

module.exports = router;
