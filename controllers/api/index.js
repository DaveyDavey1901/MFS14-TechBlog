const router = require("express").Router();

const blogRoutes = require("./addUpdateBlog.js");
const userRoutes = require("./userRoutes");

router.use("/blogs", blogRoutes);
router.use("/users", userRoutes);

module.exports = router;
