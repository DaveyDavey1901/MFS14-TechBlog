const router = require("express").Router();

const homeRoutes = require("./home-routes")
const apiRoutes = require("./api");
const dashRoutes = require("./dashRoutes");

router.use("/", homeRoutes);
router.use("/dashboard", dashRoutes);
router.use("/api", apiRoutes);

module.exports = router;


