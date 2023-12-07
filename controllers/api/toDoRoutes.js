const router = require("express").Router();
const { Task, Day, Week } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const taskData = await Task.findAll({
      where: { user_id: req.session.user_id },
      include: [
        { model: Day, attributes: ["date"] },
        { model: Week, attributes: ["start_date", "end_date"] },
      ],
    });
    res.status(200).json(taskData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Need to add day_id from fetch request
router.post("/:id", withAuth, async (req, res) => {
  try {
    const newTask = await Task.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newTask);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const taskData = await Task.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (!taskData) {
      res.status(404).json({ message: "Nothing found with that ID!" });
      return;
    }
    res.status(200).json(taskData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
