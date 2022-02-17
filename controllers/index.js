const router = require("express").Router();

const blogRoutes = require("./blogRoutes");
const homeRoutes = require("./home-routes")

router.use("/blogs", blogRoutes);
router.use("/", homeRoutes);

module.exports = router;


