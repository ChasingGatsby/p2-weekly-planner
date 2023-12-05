const router = require("express").Router();
const { Weekday, Priority, Day, Task } = require("../../models");

// extracting the right week
router.get("/:id", async (req, res) => {
  try {

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
