const router = require("express").Router();

const blogRoutes = require("./addUpdateBlog.js");


router.use("/blogs", blogRoutes);


module.exports = router;
