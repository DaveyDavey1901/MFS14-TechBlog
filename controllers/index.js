const router = require("express").Router();

const blogRoutes = require("./blogRoutes");
const homeRoutes = require("./home-routes")
const apiRoutes = require("./api");

router.use("/blogs", blogRoutes);
router.use("/", homeRoutes);
router.use("/api", apiRoutes);

module.exports = router;


