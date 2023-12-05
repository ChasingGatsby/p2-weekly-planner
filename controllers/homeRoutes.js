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
  res.render("planner", {
    logged_in: req.session.logged_in,
  });
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/planner", withAuth, async (req, res) => {
  try {
    const motivatorData = await Motivator.findAll({
      where: { user_id: req.session.user_id },
    });
    const futureData = await Future.findAll({
      where: { user_id: req.session.user_id },
    });
    const motivators = motivatorData.map((data) => data.get({ plain: true }));
    const future = futureData.map((data) => data.get({ plain: true }));
    res.render("planner", {
      motivators,
      future,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
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
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;
