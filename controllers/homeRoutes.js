const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("planner");
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/login");
    return;
  }
  res.render("login");
});

router.get("/planner", async (req, res) => {
  try {
    const dayData = await Day.findAll({
      include: [{ model: Week, attributes: ["start_date, end_date"] }],
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
