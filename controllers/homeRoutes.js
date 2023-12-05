const router = require("express").Router();
const { User, Motivator, Future } = require("../models");

router.get("/", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/home");
  }
  res.render("login");
});

router.get("/home", async (req, res) => {
  try {
    const motivatorData = await Motivator.findAll({
      where: { user_id: req.session.user_id },
    });
    const futureData = await Future.findAll({
      where: { user_id: req.session.user_id },
    });

    const motivators = motivatorData.map((data) => data.get({ plain: true }));

    const future = futureData.map((data) => data.get({ plain: true }));

    res.render("planner", { future, motivators });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
