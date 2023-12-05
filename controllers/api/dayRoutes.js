const router = require("express").Router();
const { Weekday, Priority, Day, Task, Week } = require("../../models");

// extracting the right week
router.get("/:id", async (req, res) => {
  try {
    const weekData = Day.findAll({
      where: { week_id: req.params.id, user_id: req.session.user_id },
      include: [
        { model: Task, attributes: ["content"] },
        { model: Priority, attibutes: ["content"] },
        { model: Weekday, attributes: ["name"] },
      ],
    });
    res.status(200).json(weekData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
