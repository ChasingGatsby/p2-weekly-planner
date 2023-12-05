const router = require("express").Router();
const { User, Motivator, Future } = require("../models");

router.get("/", (req, res) => {
  res.render("planner", {
    logged_in: req.session.logged_in,
  });
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/planner", async (req, res) => {
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

module.exports = router;
