const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
  } catch (err) {}
});

router.get("/planner", async (req, res) => {
  try {
    const dayData = await Day.findAll({
      include: [{ model: Week, attributes: ["start_date, end_date"] }],
    });
  } catch (err) {
    res.status(500).json(err)
  }
});
