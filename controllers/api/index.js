const router = require("express").Router();

const userRoutes = require("./userRoutes");
const dayRoutes = require("./dayRoutes");
const priorityRoutes = require("./priorityRoutes");
const futureRoutes = require("./futureRoutes");
const motivatorRoutes = require("./motivatorRoutes");

router.use("/user", userRoutes);
router.use("/day", dayRoutes);
router.use("/priority", priorityRoutes);
router.use("/future", futureRoutes);
router.use("/motivator", motivatorRoutes);

module.exports = router;
