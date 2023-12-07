const router = require("express").Router();

const userRoutes = require("./userRoutes");
const dayRoutes = require("./dayRoutes");
const priorityRoutes = require("./priorityRoutes");
const futureRoutes = require("./futureRoutes");
const motivatorRoutes = require("./motivatorRoutes");
const toDoRoutes = require("./toDoRoutes");

router.use("/user", userRoutes);
router.use("/day", dayRoutes);
router.use("/priority", priorityRoutes);
router.use("/future", futureRoutes);
router.use("/motivator", motivatorRoutes);
router.use("/todo", toDoRoutes);

module.exports = router;
