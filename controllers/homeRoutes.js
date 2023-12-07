const router = require("express").Router();
const {
  User,
  Motivator,
  Future,
  Day,
  Task,
  Priority,
  Weekday,
} = require("../models");
const withAuth = require("../utils/auth");

router.get("/", (req, res) => {
  res.render("login");
});

router.get("/planner/:week_id", withAuth, async (req, res) => {
  try {
    const { week_id } = req.params;
    const motivatorData = await Motivator.findAll({
      where: { user_id: req.session.user_id },
    });
    const futureData = await Future.findAll({
      where: { user_id: req.session.user_id },
    });
    const motivators = motivatorData.map((data) => data.get({ plain: true }));
    const future = futureData.map((data) => data.get({ plain: true }));

    const weekData = await Day.findAll({
      where: { week_id },
      include: [
        { model: Task, attributes: ["content"] },
        { model: Priority, attributes: ["content"] },
        { model: Weekday, attributes: ["day_name"] },
      ],
    });
    const fullWeek = weekData.map((data) => data.get({ plain: true }));

    res.render("planner", {
      motivators,
      future,
      fullWeek,
      week_id,
      logged_in: req.session.logged_in,
      user: req.session.username,
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.get("/motivator", (req, res) => {
  res.render("motivator");
});

router.get("/future", (req, res) => {
  res.render("future");
});

router.get("/todo/:id", (req, res) => {
  const id = req.params.id;
  res.render("todo", {id});
});

router.get("/priority/:id", (req, res) => {
  const id = req.params.id;
  res.render("priority", {id});
});

module.exports = router;
