const router = require("express").Router();

const userRoutes = require("./userRoutes");
const dayRoutes = require("./dayRoutes")

router.use("/user", userRoutes);
router.use("/day", dayRoutes)

module.exports = router;
